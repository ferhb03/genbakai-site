import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnósticos operativos para PyMEs industriales | Genba-Kai",
  description:
    "Herramientas de diagnóstico para observar el estado real de la operación, detectar brechas y ordenar prioridades antes de intervenir.",

  openGraph: {
    title: "Diagnósticos operativos para PyMEs industriales | Genba-Kai",
    description:
      "Herramientas de diagnóstico para observar el estado real de la operación, detectar brechas y ordenar prioridades antes de intervenir.",
    url: "https://genbakai.com/diagnosticos",
    siteName: "Genba-Kai",
    images: [
      {
        url: "https://genbakai.com/og-diagnosticos.png",
        width: 1200,
        height: 630,
        alt: "Diagnósticos operativos para PyMEs industriales",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diagnósticos operativos para PyMEs industriales | Genba-Kai",
    description:
      "Herramientas para evaluar pérdidas operativas, 5S, trabajo estandarizado y madurez operativa.",
    images: ["https://genbakai.com/og-diagnosticos.png"],
  },
};

export default function DiagnosticosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}