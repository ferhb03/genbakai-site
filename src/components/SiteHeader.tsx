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

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

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
      const threshold = 12;

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

  return (
    <header
      className={`
        sticky top-0 z-50
        border-b border-slate-200
        bg-white
        transition-transform duration-300 ease-out
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
              className="whitespace-nowrap hover:text-slate-700"
            >
              {content.diagnostics}
            </Link>

            <a
              href={isEnglish ? "/en#consultoria" : "/#consultoria"}
              className="whitespace-nowrap hover:text-slate-700"
            >
              {content.consulting}
            </a>

            <a
              href={isEnglish ? "/en#formacion" : "/#formacion"}
              className="whitespace-nowrap hover:text-slate-700"
            >
              {content.training}
            </a>

            <a
              href={isEnglish ? "/en#comunidad" : "/#comunidad"}
              className="whitespace-nowrap hover:text-slate-700"
            >
              {content.resources}
            </a>

            <a
              href={isEnglish ? "/en#sobre" : "/#sobre"}
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