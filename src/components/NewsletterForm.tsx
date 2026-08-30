"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";
type Language = "es" | "en";

type NewsletterFormProps = {
  language?: Language;
};

export default function NewsletterForm({
  language = "es",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const content =
    language === "en"
      ? {
          nameLabel: "Name",
          namePlaceholder: "Your name",
          emailLabel: "Email address",
          emailPlaceholder: "Your email",
          loading: "Subscribing...",
          submit: "Subscribe",
          emailRequired: "Enter your email address.",
          genericError: "The subscription could not be completed.",
          alreadySubscribed:
            "This email is already registered to receive Genba-Kai updates.",
          success:
            "Done. New Genba-Kai resources and updates will be sent to this email.",
          unexpectedError: "An error occurred. Please try again.",
          privacy:
            "Only Genba-Kai related updates will be sent. You can unsubscribe at any time.",
        }
      : {
          nameLabel: "Nombre",
          namePlaceholder: "Tu nombre",
          emailLabel: "Correo electrónico",
          emailPlaceholder: "Tu email",
          loading: "Registrando...",
          submit: "Suscribirme",
          emailRequired: "Ingresá tu correo electrónico.",
          genericError: "No pudimos registrar la suscripción.",
          alreadySubscribed:
            "Este correo ya estaba registrado para recibir novedades.",
          success:
            "Listo. Te avisaremos cuando publiquemos nuevos recursos de Genba-Kai.",
          unexpectedError: "Ocurrió un error. Intentá nuevamente.",
          privacy:
            "Solo enviaremos novedades relacionadas con Genba-Kai. Podrás darte de baja cuando quieras.",
        };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const normalizedFirstName = firstName.trim();

    if (!normalizedEmail) {
      setStatus("error");
      setMessage(content.emailRequired);
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: normalizedEmail,
          firstName: normalizedFirstName,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : content.genericError
        );
      }

      setStatus("success");

      if (data.alreadySubscribed) {
        setMessage(content.alreadySubscribed);
      } else {
        setMessage(content.success);
        setEmail("");
        setFirstName("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);

      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : content.unexpectedError
      );
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="mx-auto mt-8 max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr_auto]"
      >
        <label htmlFor="newsletter-name" className="sr-only">
          {content.nameLabel}
        </label>

        <input
          id="newsletter-name"
          type="text"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);

            if (status !== "idle") {
              setStatus("idle");
              setMessage("");
            }
          }}
          placeholder={content.namePlaceholder}
          autoComplete="given-name"
          required
          disabled={isLoading}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        />

        <label htmlFor="newsletter-email" className="sr-only">
          {content.emailLabel}
        </label>

        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);

            if (status !== "idle") {
              setStatus("idle");
              setMessage("");
            }
          }}
          placeholder={content.emailPlaceholder}
          autoComplete="email"
          required
          disabled={isLoading}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? content.loading : content.submit}
        </button>
      </form>

      {message && (
        <p
          role="status"
          aria-live="polite"
          className={`mt-3 text-sm ${
            status === "success"
              ? "text-emerald-700"
              : "text-red-700"
          }`}
        >
          {message}
        </p>
      )}

      <p className="mt-3 text-xs leading-5 text-slate-500">
        {content.privacy}
      </p>
    </div>
  );
}