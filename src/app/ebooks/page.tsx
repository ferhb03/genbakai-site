import type { Metadata } from "next";
import Link from "next/link";
import EbookLeadForm from "@/components/EbookLeadForm";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Ebooks y manuales prácticos | Genba-Kai",
  description:
    "Recursos prácticos para comprender los principios del Toyota Production System y aplicarlos a problemas reales de operación y mejora.",
  alternates: {
    canonical: "https://genbakai.com/ebooks",
  },
  openGraph: {
    title: "eBooks y manuales prácticos",
    description:
      "Recursos para comprender, aplicar y mejorar con principios del Toyota Production System.",
    url: "https://genbakai.com/ebooks",
    siteName: "Genba-Kai",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://genbakai.com/og-ebooks-v2.png",
        width: 1200,
        height: 630,
        alt: "eBooks y manuales prácticos de Genba-Kai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eBooks y manuales prácticos",
    description:
      "Recursos para comprender, aplicar y mejorar con principios del Toyota Production System.",
    images: ["https://genbakai.com/og-ebooks-v2.png"],
  },
};

const ebooks = [
  {
    slug: "de-las-herramientas-al-sistema",
    eyebrow: "Toyota Production System",
    title: "De las Herramientas al Sistema",
    subtitle:
      "Por qué aplicar herramientas Lean de forma aislada no alcanza para transformar una operación.",
    description:
      "Una guía para comprender cómo los principios del Toyota Production System se conectan entre sí —estabilidad, trabajo estandarizado, flujo, calidad, resolución de problemas y desarrollo de personas— y cómo construir un sistema de trabajo propio, coherente y sostenible.",
    details: "50 páginas · PDF · Español",
  },
];

export default function EbooksPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <ScrollToTop />
      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Recursos Genba-Kai
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            eBooks y manuales prácticos.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Materiales desarrollados para comprender principios del Toyota
            Production System y aplicarlos a problemas reales de operación,
            estabilidad y mejora.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {ebooks.map((ebook) => (
            <article
              key={ebook.slug}
              className="flex h-full flex-col rounded-3xl border border-slate-200 p-8"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                {ebook.eyebrow}
              </p>
              <h2 className="mt-3 text-2xl font-semibold">{ebook.title}</h2>
              <p className="mt-3 text-base font-medium leading-7 text-slate-700">
                {ebook.subtitle}
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {ebook.description}
              </p>

              <div className="mt-auto pt-8">
                <p className="text-sm text-slate-500">{ebook.details}</p>
                <EbookLeadForm
                  resourceSlug={ebook.slug}
                  resourceTitle={ebook.title}
                />
              </div>
            </article>
          ))}

          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Próximamente
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Nuevos ebooks</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Esta biblioteca crecerá con nuevas guías sobre estabilidad,
              estandarización, flujo, liderazgo y mejora continua.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <Link
          href="/#formacion"
          className="inline-flex rounded-2xl border border-slate-300 px-4 py-4 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
        >
          ← VOLVER A FORMACIÓN
        </Link>
      </div>
    </main>
  );
}
