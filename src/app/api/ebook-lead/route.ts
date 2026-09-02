import { createClient } from "@supabase/supabase-js";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const resendApiKey = process.env.RESEND_API_KEY;
const ebookFromEmail = process.env.EBOOK_FROM_EMAIL;

const resources = {
  "de-las-herramientas-al-sistema": {
    title: "De las Herramientas al Sistema",
    filename: "De las Herramientas al Sistema.pdf",
    filePath: "De-las-Herramientas-al-Sistema.pdf",
  },
} as const;

type ResourceSlug = keyof typeof resources;

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character
  );

export async function POST(request: Request) {
  try {
    if (
      !supabaseUrl ||
      !supabaseServiceRoleKey ||
      !resendApiKey ||
      !ebookFromEmail
    ) {
      console.error("Missing ebook delivery environment variables");
      return NextResponse.json(
        { error: "Configuración del servidor incompleta." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const firstName =
      typeof body.firstName === "string" ? body.firstName.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const resourceSlug =
      typeof body.resourceSlug === "string" ? body.resourceSlug.trim() : "";
    const source = body.source === "ebooks-page" ? body.source : "ebooks-page";
    const privacyConsent = body.privacyConsent === true;
    const marketingConsent = body.marketingConsent === true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!firstName) {
      return NextResponse.json(
        { error: "Ingresá tu nombre." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Ingresá un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!(resourceSlug in resources)) {
      return NextResponse.json(
        { error: "El recurso solicitado no es válido." },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        { error: "Necesitamos tu aceptación para gestionar la solicitud." },
        { status: 400 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    });

    const { error: requestError } = await supabase
      .from("resource_requests")
      .upsert(
        {
          email,
          first_name: firstName,
          resource_slug: resourceSlug,
          source,
          privacy_consent: privacyConsent,
          marketing_consent: marketingConsent,
          requested_at: new Date().toISOString(),
        },
        { onConflict: "email,resource_slug" }
      );

    if (requestError) {
      console.error("Resource request insert error:", requestError);
      return NextResponse.json(
        { error: "No pudimos registrar tu solicitud." },
        { status: 500 }
      );
    }

    if (marketingConsent) {
      const { error: subscriberError } = await supabase
        .from("newsletter_subscribers")
        .upsert(
          {
            email,
            first_name: firstName,
            source: `ebook:${resourceSlug}`,
            status: "subscribed",
          },
          { onConflict: "email", ignoreDuplicates: true }
        );

      if (subscriberError) {
        console.error("Newsletter subscriber insert error:", subscriberError);
      }
    }

    const resource = resources[resourceSlug as ResourceSlug];
    const pdfPath = path.join(
      process.cwd(),
      "private-assets",
      "ebooks",
      resource.filePath
    );
    const pdfContent = await readFile(pdfPath);
    const safeFirstName = escapeHtml(firstName);
    const idempotencyKey = createHash("sha256")
      .update(`${email}:${resourceSlug}:${new Date().toISOString().slice(0, 10)}`)
      .digest("hex");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify({
        from: ebookFromEmail,
        to: [email],
        subject: `Tu ebook: ${resource.title}`,
        html: `
          <div style="margin:0 auto;max-width:600px;font-family:Arial,sans-serif;color:#0f172a;line-height:1.6">
            <p>Hola ${safeFirstName},</p>
            <p>Gracias por tu interés en los recursos de Genba-Kai.</p>
            <p>Adjunto encontrarás <strong>${resource.title}</strong>, una guía práctica para comprender el Toyota Production System como un sistema conectado.</p>
            <p>Espero que te resulte útil para observar y mejorar tu operación.</p>
            <p style="margin-top:32px">Saludos,<br><strong>Fernando Benitez</strong><br>Genba-Kai®</p>
          </div>
        `,
        text: `Hola ${firstName},\n\nGracias por tu interés en los recursos de Genba-Kai.\n\nAdjunto encontrarás ${resource.title}.\n\nEspero que te resulte útil para observar y mejorar tu operación.\n\nSaludos,\nFernando Benitez\nGenba-Kai®`,
        attachments: [
          {
            filename: resource.filename,
            content: pdfContent.toString("base64"),
          },
        ],
        tags: [
          { name: "source", value: "ebooks-page" },
          { name: "resource", value: resourceSlug },
        ],
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Resend email error:", emailResult);
      await supabase
        .from("resource_requests")
        .update({
          email_status: "failed",
          email_error:
            typeof emailResult?.message === "string"
              ? emailResult.message.slice(0, 500)
              : "Resend request failed",
        })
        .eq("email", email)
        .eq("resource_slug", resourceSlug);

      return NextResponse.json(
        {
          error:
            "Registramos tu solicitud, pero no pudimos enviar el ebook. Intentá nuevamente en unos minutos.",
        },
        { status: 502 }
      );
    }

    const { error: deliveryUpdateError } = await supabase
      .from("resource_requests")
      .update({
        email_status: "sent",
        email_provider_id:
          typeof emailResult?.id === "string" ? emailResult.id : null,
        email_sent_at: new Date().toISOString(),
        email_error: null,
      })
      .eq("email", email)
      .eq("resource_slug", resourceSlug);

    if (deliveryUpdateError) {
      console.error("Email delivery status update error:", deliveryUpdateError);
    }

    return NextResponse.json(
      { success: true, message: "Ebook enviado correctamente." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Ebook lead route error:", error);
    return NextResponse.json(
      { error: "Ocurrió un error inesperado." },
      { status: 500 }
    );
  }
}
