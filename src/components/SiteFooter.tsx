"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const content = isEnglish
    ? {
        positioning: "Operational improvement for industrial SMEs.",
        description:
          "Diagnostics, consulting and training based on Toyota Production System principles.",
        navigation: "Navigation",
        diagnostics: "Diagnostics",
        consulting: "Consulting",
        training: "Training",
        resources: "Resources",
        about: "About Fernando",
        information: "Information",
        privacy: "Privacy Policy",
        rights: "All rights reserved.",
        trademark: "Genba-Kai® is a registered trademark.",
      }
    : {
        positioning: "Mejora operativa para PyMEs industriales.",
        description:
          "Diagnósticos, consultoría y formación basados en principios del Toyota Production System.",
        navigation: "Navegación",
        diagnostics: "Diagnósticos",
        consulting: "Consultoría",
        training: "Formación",
        resources: "Comunidad",
        about: "Acerca de Fernando",
        information: "Información",
        privacy: "Política de privacidad",
        rights: "Todos los derechos reservados.",
        trademark: "Genba-Kai® es una marca registrada.",
      };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          <div>
            <Link
              href={isEnglish ? "/en" : "/"}
              className="inline-block"
            >
              <div className="text-lg font-semibold tracking-tight text-slate-900">
                GENBA-KAI®
              </div>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              {content.positioning}
            </p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              {content.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {content.navigation}
            </p>

            <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link
                href={isEnglish ? "/en/diagnostics" : "/diagnosticos"}
                className="transition-colors hover:text-slate-900"
              >
                {content.diagnostics}
              </Link>

              <a
                href={isEnglish ? "/en#consultoria" : "/#consultoria"}
                className="transition-colors hover:text-slate-900"
              >
                {content.consulting}
              </a>

              <a
                href={isEnglish ? "/en#formacion" : "/#formacion"}
                className="transition-colors hover:text-slate-900"
              >
                {content.training}
              </a>

              <a
                href={isEnglish ? "/en#comunidad" : "/#comunidad"}
                className="transition-colors hover:text-slate-900"
              >
                {content.resources}
              </a>

              <a
                href={isEnglish ? "/en#sobre" : "/#sobre"}
                className="transition-colors hover:text-slate-900"
              >
                {content.about}
              </a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {content.information}
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link
                href={isEnglish ? "/en/privacy" : "/privacidad"}
                className="transition-colors hover:text-slate-900"
              >
                {content.privacy}
              </Link>

              <a
                href="https://www.linkedin.com/in/fernando-horacio-benitez"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-slate-900"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 md:flex md:items-center md:justify-between">
          <p className="text-xs text-slate-500">
            © 2026 Genba-Kai. {content.rights}
          </p>

          <p className="mt-2 text-xs text-slate-500 md:mt-0">
            {content.trademark}
          </p>
        </div>
      </div>
    </footer>
  );
}