"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const isHome = pathname === "/" || pathname === "/en";

  const content = isEnglish
    ? {
        positioning: "Operational improvement for industrial SMEs.",
        description:
          "Self-assessments, on-site implementation and training for industrial SMEs.",
        navigation: "Navigation",
        diagnostics: "Diagnostics",
        consulting: "Operational Improvement",
        training: "Training",
        resources: "Resources",
        about: "About Us",
        information: "Information",
        privacy: "Privacy Policy",
        rights: "All rights reserved.",
        trademark: "Genba-Kai® is a registered trademark.",
      }
    : {
        positioning: "Mejora operativa para PyMEs industriales.",
        description:
          "Diagnósticos, mejoras en planta y formación basados en principios del Toyota Production System.",
        navigation: "Navegación",
        diagnostics: "Diagnósticos",
        consulting: "Mejora operativa",
        training: "Formación",
        resources: "Recursos",
        about: "Acerca de Nosotros",
        information: "Información",
        privacy: "Política de privacidad",
        rights: "Todos los derechos reservados.",
        trademark: "Genba-Kai® es una marca registrada.",
      };

  const handleFooterNavClick = () => {
    if (window.innerWidth >= 1024) return;

    window.dispatchEvent(
      new CustomEvent("genbakai:hide-header")
    );
  };

  const handleFooterSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    // En móvil/tablet ocultamos el header como hasta ahora
    if (window.innerWidth < 1024) {
      window.dispatchEvent(new CustomEvent("genbakai:hide-header"));
    }

    // Si estamos en otra página, dejamos que Next navegue normalmente
    if (!isHome) return;

    event.preventDefault();

    const target = document.getElementById(sectionId);

    if (!target) return;

    // Mantiene la URL correcta
    window.history.replaceState(
      null,
      "",
      `${pathname}#${sectionId}`
    );

    requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const handleDiagnosticsClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const diagnosticsPath = isEnglish
      ? "/en/diagnosticos"
      : "/diagnosticos";

    if (pathname === diagnosticsPath) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          <div>
            <Link
              href={isEnglish ? "/en#top" : "/#top"}
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
                href={isEnglish ? "/en/diagnosticos" : "/diagnosticos"}
                onClick={handleDiagnosticsClick}
                className="transition-colors hover:text-slate-900">
                {content.diagnostics}
              </Link>

              <Link
                href={isHome ? "#consultoria" : isEnglish ? "/en#consultoria" : "/#consultoria"}
                onClick={(event) => handleFooterSectionClick(event, "consultoria")}
                className="transition-colors hover:text-slate-900">
                {content.consulting}
              </Link>

              <Link
                href={isHome ? "#formacion" : isEnglish ? "/en#formacion" : "/#formacion"}
                onClick={(event) => handleFooterSectionClick(event, "formacion")}
                className="transition-colors hover:text-slate-900">
                {content.training}
              </Link>

              <Link
                href={isHome ? "#recursos" : isEnglish ? "/en#recursos" : "/#recursos"}
                onClick={(event) => handleFooterSectionClick(event, "recursos")}
                className="transition-colors hover:text-slate-900"
              >
                {content.resources}
              </Link>

              <Link
                href={isHome ? "#sobre" : isEnglish ? "/en#sobre" : "/#sobre"}
                onClick={(event) => handleFooterSectionClick(event, "sobre")}
                className="transition-colors hover:text-slate-900"
              >
                {content.about}
              </Link>

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

              <a
                href="https://www.instagram.com/genbakaiconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-slate-900"
              >
                Instagram
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