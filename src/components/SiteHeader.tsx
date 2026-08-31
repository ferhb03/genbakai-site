"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";

export default function SiteHeader() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const accumulatedScroll = useRef(0);
  const isNavigating = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleHideHeader = () => {
      if (window.innerWidth >= 768) return;

      isNavigating.current = true;
      setIsVisible(false);
      accumulatedScroll.current = 0;

      window.setTimeout(() => {
        isNavigating.current = false;
        lastScrollY.current = window.scrollY;
      }, 1000);
    };

    window.addEventListener("genbakai:hide-header", handleHideHeader);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      // Ignorar el scroll generado al navegar desde el header
      if (isNavigating.current) {
        lastScrollY.current = currentScrollY;
        return;
      }

      // Siempre visible cerca del inicio de la página
      if (currentScrollY < 40) {
        setIsVisible(true);
        accumulatedScroll.current = 0;
        lastScrollY.current = currentScrollY;
        return;
      }

      // Si cambia la dirección, reinicia la acumulación
      if (
        (difference > 0 && accumulatedScroll.current < 0) ||
        (difference < 0 && accumulatedScroll.current > 0)
      ) {
        accumulatedScroll.current = 0;
      }

      accumulatedScroll.current += difference;

      // Tolerancia: no reaccionar a pequeños movimientos del dedo
      const threshold = 20;

      if (accumulatedScroll.current > threshold) {
        // Scroll hacia abajo
        setIsVisible(false);
        accumulatedScroll.current = 0;
      }

      if (accumulatedScroll.current < -threshold) {
        // Scroll hacia arriba
        setIsVisible(true);
        accumulatedScroll.current = 0;
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("genbakai:hide-header", handleHideHeader);
    };
  }, []);

  const content = isEnglish
    ? {
        tagline: "Diagnostics, consulting and training",
        diagnostics: "DIAGNOSTICS",
        consulting: "CONSULTING",
        training: "TRAINING",
        resources: "RESOURCES",
        about: "ABOUT FERNANDO",
      }
    : {
        tagline: "Diagnósticos, consultoría y formación",
        diagnostics: "DIAGNÓSTICOS",
        consulting: "CONSULTORÍA",
        training: "FORMACIÓN",
        resources: "RECURSOS",
        about: "ACERCA DE FERNANDO",
      };

  const handleNavClick = () => {
    // Solo aplicar este comportamiento en móvil
    if (window.innerWidth >= 768) return;

    isNavigating.current = true;
    setIsVisible(false);
    accumulatedScroll.current = 0;

    // Mantener bloqueada la detección mientras ocurre el scroll
    window.setTimeout(() => {
      isNavigating.current = false;
      lastScrollY.current = window.scrollY;
    }, 1000);
  };

  return (
    <header
      className={`
        sticky top-0 z-50
        border-b border-slate-200
        bg-white
        transition-transform duration-300 ease-out
        will-change-transform
        ${
          isVisible
            ? "translate-y-0"
            : "-translate-y-full"
        }
        md:translate-y-0
      `}
    >
      <div className="mx-auto max-w-6xl px-4 pt-4 pb-4 md:flex md:items-center md:justify-between md:px-6 md:py-5">
        <Link
          href={isEnglish ? "/en" : "/"}
          className="flex items-center gap-3"
        >
          <img
            src="/logo1.png"
            alt="Genba-Kai logo"
            className="h-12 w-auto object-contain md:h-20"
          />

          <div>
            <div className="text-lg font-semibold tracking-tight text-slate-900 md:text-2xl">
              GENBA-KAI
            </div>

            <div className="text-xs text-slate-500 md:text-sm">
              {content.tagline}
            </div>
          </div>
        </Link>

        <div className="mt-4 flex flex-col gap-4 md:mt-0 md:items-end">
          <div className="flex items-center justify-end gap-3 text-xs font-medium text-slate-500 md:text-sm">
            <Link
              href="/"
              className={`flex items-center gap-1.5 transition-colors ${
                !isEnglish
                  ? "font-semibold text-slate-900"
                  : "hover:text-slate-900"
              }`}
            >
              <ReactCountryFlag
                countryCode="ES"
                svg
                style={{
                  width: "1.2em",
                  height: "1.2em",
                }}
                title="Español"
              />
              ES
            </Link>

            <span className="text-slate-300">|</span>

            <Link
              href="/en"
              className={`flex items-center gap-1.5 transition-colors ${
                isEnglish
                  ? "font-semibold text-slate-900"
                  : "hover:text-slate-900"
              }`}
            >
              <ReactCountryFlag
                countryCode="GB"
                svg
                style={{
                  width: "1.2em",
                  height: "1.2em",
                }}
                title="English"
              />
              EN
            </Link>
          </div>

          <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-semibold text-slate-900 md:flex md:flex-wrap md:gap-4 md:text-base">
            <Link
              href={isEnglish ? "/en/diagnostics" : "/diagnosticos"}
              onClick={handleNavClick}
              className="whitespace-nowrap hover:text-slate-700"
            >
              {content.diagnostics}
            </Link>

            <a
              href={isEnglish ? "/en#consultoria" : "/#consultoria"}
              onClick={handleNavClick}
              className="whitespace-nowrap hover:text-slate-700"
            >
              {content.consulting}
            </a>

            <a
              href={isEnglish ? "/en#formacion" : "/#formacion"}
              onClick={handleNavClick}
              className="whitespace-nowrap hover:text-slate-700"
            >
              {content.training}
            </a>

            <a
              href={isEnglish ? "/en#comunidad" : "/#comunidad"}
              onClick={handleNavClick}
              className="whitespace-nowrap hover:text-slate-700"
            >
              {content.resources}
            </a>

            <a
              href={isEnglish ? "/en#sobre" : "/#sobre"}
              onClick={handleNavClick}
              className="whitespace-nowrap hover:text-slate-700"
            >
              {content.about}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}