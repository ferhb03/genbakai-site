"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) {
      setStatus("error");
      setMessage("Ingresá tu correo electrónico.");
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
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "No pudimos registrar la suscripción."
        );
      }

      setStatus("success");

      if (data.alreadySubscribed) {
        setMessage("Este correo ya estaba registrado para recibir novedades.");
      } else {
        setMessage(
          "Listo. Te avisaremos cuando publiquemos nuevos recursos de Genba-Kai."
        );
        setEmail("");
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);

      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Ocurrió un error. Intentá nuevamente."
      );
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="mx-auto mt-8 max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Correo electrónico
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
          placeholder="Tu email"
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
          {isLoading ? "Registrando..." : "Suscribirme"}
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
        Solo enviaremos novedades relacionadas con Genba-Kai. Podrás darte de
        baja cuando quieras.
      </p>
    </div>
  );
}