"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import {
  ClipboardCheck,
  Settings,
  BookOpen,
  Library,
  UserRound,
} from "lucide-react";

export default function SiteHeader() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const [isVisible, setIsVisible] = useState(true);

  const lastScrollY = useRef(0);
  const accumulatedScroll = useRef(0);
  const isNavigating = useRef(false);

  useEffect(() => {
    // Cada vez que cambia de página, mostrar el header
    // y comenzar la nueva página desde arriba.
    setIsVisible(true);
    accumulatedScroll.current = 0;
    isNavigating.current = true;

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      lastScrollY.current = 0;

      window.setTimeout(() => {
        isNavigating.current = false;
        lastScrollY.current = window.scrollY;
      }, 100);
    });
  }, [pathname]);

  useEffect(() => {
    setIsVisible(true);
    accumulatedScroll.current = 0;

    window.setTimeout(() => {
      lastScrollY.current = window.scrollY;
    }, 100);
  }, [pathname]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const maxScrollY =
        document.documentElement.scrollHeight - window.innerHeight;

      const currentScrollY = Math.min(
        Math.max(window.scrollY, 0),
        Math.max(maxScrollY, 0)
      );

      const difference = currentScrollY - lastScrollY.current;

      // Ignorar el scroll generado por navegación interna
      if (isNavigating.current) {
        lastScrollY.current = currentScrollY;
        return;
      }

      // Siempre visible cerca del inicio
      if (currentScrollY < 40) {
        setIsVisible(true);
        accumulatedScroll.current = 0;
        lastScrollY.current = currentScrollY;
        return;
      }

      // Si cambia la dirección, reiniciar acumulación
      if (
        (difference > 0 && accumulatedScroll.current < 0) ||
        (difference < 0 && accumulatedScroll.current > 0)
      ) {
        accumulatedScroll.current = 0;
      }

      accumulatedScroll.current += difference;

      // Evita reaccionar a movimientos mínimos del dedo
      const threshold = 20;

      if (accumulatedScroll.current > threshold) {
        setIsVisible(false);
        accumulatedScroll.current = 0;
      }

      if (accumulatedScroll.current < -threshold) {
        setIsVisible(true);
        accumulatedScroll.current = 0;
      }

      lastScrollY.current = currentScrollY;
    };

    const handleHideHeader = () => {
      if (window.innerWidth >= 1024) return;

      isNavigating.current = true;
      setIsVisible(false);
      accumulatedScroll.current = 0;

      window.setTimeout(() => {
        isNavigating.current = false;
        lastScrollY.current = window.scrollY;
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("genbakai:hide-header", handleHideHeader);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("genbakai:hide-header", handleHideHeader);
    };
  }, []);

  const handleNavClick = () => {
    if (window.innerWidth >= 1024) return;

    isNavigating.current = true;
    setIsVisible(false);
    accumulatedScroll.current = 0;

    window.setTimeout(() => {
      isNavigating.current = false;
      lastScrollY.current = window.scrollY;
    }, 1000);
  };

  const content = isEnglish
    ? {
        tagline: "Diagnostics, consulting and training",
        diagnostics: "DIAGNOSTICS",
        consulting: "CONSULTING",
        training: "TRAINING",
        resources: "RESOURCES",
        about: "ABOUT US",
      }
    : {
        tagline: "Diagnósticos, consultoría y formación",
        diagnostics: "DIAGNÓSTICOS",
        consulting: "CONSULTORÍA",
        training: "FORMACIÓN",
        resources: "RECURSOS",
        about: "NOSOTROS",
      };

  const handleLogoClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const homePath = isEnglish ? "/en" : "/";

    if (pathname === homePath) {
      event.preventDefault();

      setIsVisible(true);
      accumulatedScroll.current = 0;
      isNavigating.current = true;

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      window.setTimeout(() => {
        isNavigating.current = false;
        lastScrollY.current = window.scrollY;
      }, 700);
    }
  };

  return (
    <header
      className={`
        sticky top-0 z-50
        border-b border-slate-200
        bg-white
        transition-transform duration-300 ease-out
        will-change-transform
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        lg:translate-y-0
      `}
    >
      <div
        className="
          mx-auto max-w-6xl px-4 py-4

          lg:grid
          lg:grid-cols-[1fr_auto_auto]
          lg:items-center
          lg:gap-6
          lg:px-6
          lg:py-5
        "
      >
        {/* COLUMNA 1 — LOGO */}
        <Link
          href={isEnglish ? "/en" : "/"}
          onClick={handleLogoClick}
          className="flex items-center gap-3"
        >
          <img
            src="/logo1.png"
            alt="Genba-Kai logo"
            className="h-14 w-auto object-contain md:h-16"
          />

          <div>
            <div className="text-xl font-semibold tracking-tight text-slate-900 md:text-xl">
              GENBA-KAI
            </div>

            <div className="text-xs text-slate-500 md:text-sm">
              {content.tagline}
            </div>
          </div>
        </Link>

        {/* COLUMNA 2 — NAVEGACIÓN */}
        <nav
          className="
            order-3 mt-4
            grid w-full grid-cols-6 gap-2
            rounded-2xl border border-slate-200
            bg-white p-2
            text-slate-900

            lg:order-none
            lg:mt-0
            lg:grid-cols-5
            lg:gap-0
            lg:px-3
            lg:py-3
          "
        >
          {/* DIAGNÓSTICOS */}
          <Link
            href={isEnglish ? "/en/diagnostics" : "/diagnosticos"}
              className="
              group col-span-2
              flex min-h-[82px] flex-col items-center justify-center
              gap-2 rounded-xl
              border border-slate-200
              px-2 py-3 text-center
              transition-colors
              hover:bg-slate-50

              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-[105px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <ClipboardCheck
              className="h-7 w-7 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[11px] font-medium tracking-wide md:text-xs">
              {content.diagnostics}
            </span>
          </Link>

          {/* CONSULTORÍA */}
          <a
            href={isEnglish ? "/en#consultoria" : "/#consultoria"}
            onClick={handleNavClick}
            className="
              group col-span-2
              flex min-h-[82px] flex-col items-center justify-center
              gap-2 rounded-xl
              border border-slate-200
              px-2 py-3 text-center
              transition-colors
              hover:bg-slate-50

              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-[105px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <Settings
              className="h-7 w-7 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[11px] font-medium tracking-wide md:text-xs">
              {content.consulting}
            </span>
          </a>

          {/* FORMACIÓN */}
          <a
            href={isEnglish ? "/en#formacion" : "/#formacion"}
            onClick={handleNavClick}
            className="
              group col-span-2
              flex min-h-[82px] flex-col items-center justify-center
              gap-2 rounded-xl
              border border-slate-200
              px-2 py-3 text-center
              transition-colors
              hover:bg-slate-50

              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-[105px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <BookOpen
              className="h-7 w-7 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[11px] font-medium tracking-wide md:text-xs">
              {content.training}
            </span>
          </a>

          {/* RECURSOS */}
          <a
            href={isEnglish ? "/en#recursos" : "/#recursos"}
            onClick={handleNavClick}
            className="
              group col-span-3
              flex min-h-[82px] flex-col items-center justify-center
              gap-2 rounded-xl
              border border-slate-200
              px-2 py-3 text-center
              transition-colors
              hover:bg-slate-50

              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-[105px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <Library
              className="h-7 w-7 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[11px] font-medium tracking-wide md:text-xs">
              {content.resources}
            </span>
          </a>

          {/* FERNANDO */}
          <a
            href={isEnglish ? "/en#sobre" : "/#sobre"}
            onClick={handleNavClick}
            className="
              group col-span-3
              flex min-h-[82px] flex-col items-center justify-center
              gap-2 rounded-xl
              border border-slate-200
              px-2 py-3 text-center
              transition-colors
              hover:bg-slate-50

              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-[105px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <UserRound
              className="h-7 w-7 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[11px] font-medium tracking-wide md:text-xs">
              {content.about}
            </span>
          </a>
        </nav>

        {/* COLUMNA 3 — IDIOMAS */}
        <div
          className="
            order-2 mt-4
            flex items-center justify-end gap-3
            text-xs font-medium text-slate-500

            lg:order-none
            lg:mt-0
            lg:flex-col
            lg:items-start
            lg:justify-center
            lg:gap-2
            lg:text-sm
          "
        >
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
      </div>
    </header>
  );
}