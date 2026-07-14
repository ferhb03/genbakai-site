import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request: Request) {
  try {
    if (!supabaseUrl || !supabaseServiceRoleKey) {
      console.error("Missing Supabase environment variables");

      return NextResponse.json(
        { error: "Configuración del servidor incompleta." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const firstName =
      typeof body.firstName === "string"
        ? body.firstName.trim()
        : "";
    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Ingresá un correo electrónico válido." },
        { status: 400 }
      );
    }

    if (!firstName) {
      return NextResponse.json(
        { error: "Ingresá tu nombre." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseServiceRoleKey,
      {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      }
    );

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({
        email,
        first_name: firstName,
        source: "genbakai-home",
        status: "subscribed",
      });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          {
            success: true,
            alreadySubscribed: true,
            message: "Este correo ya estaba registrado.",
          },
          { status: 200 }
        );
      }

      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { error: "No pudimos registrar la suscripción." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        alreadySubscribed: false,
        message: "Suscripción registrada correctamente.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Subscribe route error:", error);

    return NextResponse.json(
      { error: "Ocurrió un error inesperado." },
      { status: 500 }
    );
  }
}