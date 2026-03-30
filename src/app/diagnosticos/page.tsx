"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

export default function DiagnosticosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Diagnósticos
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Herramientas para observar el estado actual antes de intervenir.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Los diagnósticos de Genba-kai están diseñados para ayudar a
            identificar brechas, ordenar prioridades y generar una primera base
            de análisis antes de avanzar con formación o implementación.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Disponible ahora
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Checklist 5S</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Evaluación práctica para revisar el nivel actual de implementación de 5S
            y obtener una primera lectura del estado de orden, estandarización y
            disciplina operativa.
          </p>

          <div className="mt-8">
            <a
              href="https://checklists.genbakai.com/5s"
              target="_blank"
              rel="noreferrer"
              onClick={() => track("click_diagnostico_5s")}
              className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
            >
              Ir al checklist 5S
            </a>
            <p className="mt-3 text-xs text-slate-500">
              Diagnóstico online con resultado inmediato y recomendaciones prácticas.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Disponible ahora
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Standard Work</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Diagnóstico para evaluar el nivel de definición, claridad y aplicación del
            trabajo estandarizado como base de estabilidad, entrenamiento y mejora
            continua.
          </p>

          <div className="mt-8">
            <a
              href="https://checklists.genbakai.com/standard-work"
              target="_blank"
              rel="noreferrer"
              onClick={() => track("click_standard_work")}
              className="inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
            >
              Ir a Standard Work
            </a>
            <p className="mt-3 text-xs text-slate-500">
              Evaluación inicial para detectar brechas en estandarización operativa.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Próximamente
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Nuevos diagnósticos</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Este espacio crecerá con nuevas herramientas para evaluar estabilidad
            operativa, liderazgo, flujo, reacción y madurez de mejora continua.
          </p>
        </div>
      </div>
      </section>

        <div className="mx-auto max-w-6xl px-6 pb-20">
        <Link
          href="/"
          className="inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          ← Volver al inicio
        </Link>
      </div>    
       
    </main>
  );
}