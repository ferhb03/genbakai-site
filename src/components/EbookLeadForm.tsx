"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type EbookLeadFormProps = {
  resourceSlug: string;
  resourceTitle: string;
};

export default function EbookLeadForm({
  resourceSlug,
  resourceTitle,
}: EbookLeadFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const resetFeedback = () => {
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/ebook-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim().toLowerCase(),
          resourceSlug,
          source: "ebooks-page",
          privacyConsent,
          marketingConsent,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "No pudimos registrar tu solicitud."
        );
      }

      setStatus("success");
      setMessage(
        "Listo. Te enviamos el ebook por email. Revisá también la carpeta de correo no deseado."
      );
      setFirstName("");
      setEmail("");
      setPrivacyConsent(false);
      setMarketingConsent(false);
    } catch (error) {
      console.error("Ebook lead error:", error);
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error. Intentá nuevamente."
      );
    }
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        data-ebook={resourceSlug}
        className="mt-5 inline-flex rounded-2xl bg-slate-900 px-4 py-4 text-sm font-medium text-white transition hover:bg-slate-800"
      >
        Quiero recibir el eBook
      </button>
    );
  }

  return (
    <div className="mt-5 border-t border-slate-200 pt-5">
      <p className="text-sm font-semibold text-slate-900">
        Recibí “{resourceTitle}”
      </p>
      <p className="mt-1 text-xs leading-5 text-slate-500">
        Completá tus datos y recibirás el PDF por email.
      </p>

      {status === "success" ? (
        <p
          role="status"
          aria-live="polite"
          className="mt-4 rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"
        >
          {message}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <label htmlFor={`${resourceSlug}-name`} className="sr-only">
            Nombre
          </label>
          <input
            id={`${resourceSlug}-name`}
            type="text"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              resetFeedback();
            }}
            placeholder="Tu nombre"
            autoComplete="given-name"
            required
            disabled={status === "loading"}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 disabled:opacity-60"
          />

          <label htmlFor={`${resourceSlug}-email`} className="sr-only">
            Correo electrónico
          </label>
          <input
            id={`${resourceSlug}-email`}
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              resetFeedback();
            }}
            placeholder="Tu email"
            autoComplete="email"
            required
            disabled={status === "loading"}
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 disabled:opacity-60"
          />

          <label className="flex items-start gap-3 text-xs leading-5 text-slate-600">
            <input
              type="checkbox"
              checked={privacyConsent}
              onChange={(event) => {
                setPrivacyConsent(event.target.checked);
                resetFeedback();
              }}
              required
              disabled={status === "loading"}
              className="mt-1 h-4 w-4 shrink-0 accent-slate-900"
            />
            <span>
              Acepto que Genba-Kai use estos datos para gestionar mi solicitud,
              según la{" "}
              <Link href="/privacidad" className="underline hover:text-slate-900">
                política de privacidad
              </Link>
              .
            </span>
          </label>

          <label className="flex items-start gap-3 text-xs leading-5 text-slate-600">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(event) => {
                setMarketingConsent(event.target.checked);
                resetFeedback();
              }}
              disabled={status === "loading"}
              className="mt-1 h-4 w-4 shrink-0 accent-slate-900"
            />
            <span>
              También quiero recibir nuevos recursos y novedades de Genba-Kai.
            </span>
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar eBook"}
          </button>

          {status === "error" && (
            <p role="alert" className="text-sm text-red-700">
              {message}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
