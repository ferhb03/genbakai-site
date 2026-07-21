import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "3 diagnósticos Lean | Genba-Kai",
  description:
    "Evaluá 5S, Trabajo Estandarizado y Madurez Lean antes de implementar mejoras.",

  openGraph: {
    title: "3 diagnósticos gratuitos para evaluar tu operación",
    description:
      "Checklist 5S, Trabajo Estandarizado y Madurez Lean para detectar brechas y ordenar prioridades.",
    url: "https://genbakai.com/diagnosticos",
    siteName: "Genba-Kai",
    images: [
      {
        url: "https://genbakai.com/og-diagnosticos.png",
        width: 1200,
        height: 630,
        alt: "Diagnósticos operativos de Genba-Kai",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "3 diagnósticos gratuitos para evaluar tu operación",
    description:
      "Checklist 5S, Trabajo Estandarizado y Madurez Lean.",
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