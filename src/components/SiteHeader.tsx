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

    // Cada vez que cambia de página, mostrar el header
    // y comenzar la nueva página desde arriba.  
useEffect(() => {
  setIsVisible(true);
  accumulatedScroll.current = 0;
  isNavigating.current = true;

  const scrollToDestination = () => {
    const hash = window.location.hash.replace("#", "");

    if (hash) {
      const target = document.getElementById(hash);

      if (target) {
        target.scrollIntoView({
          behavior: "auto",
          block: "start",
        });

        lastScrollY.current = window.scrollY;
        return true;
      }

      return false;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    lastScrollY.current = 0;
    return true;
  };

  // Primer intento cuando cambia la ruta
  requestAnimationFrame(() => {
    const success = scrollToDestination();

    // Si la nueva página todavía no terminó de renderizar,
    // volver a intentarlo unos milisegundos después.
    if (!success) {
      window.setTimeout(() => {
        scrollToDestination();
      }, 100);
    }

    window.setTimeout(() => {
      isNavigating.current = false;
      lastScrollY.current = window.scrollY;
    }, 200);
  });
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
      const hideThreshold = 25;
      const showThreshold = 140;

      if (accumulatedScroll.current > hideThreshold) {
        setIsVisible(false);
        accumulatedScroll.current = 0;
      }

      if (accumulatedScroll.current < -showThreshold) {
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
        tagline: "Diagnostics, operational improvement and training",
        diagnostics: "DIAGNOSTICS",
        consulting: "OPERATIONAL IMPROVEMENT",
        training: "TRAINING",
        resources: "RESOURCES",
        about: "ABOUT US",
      }
    : {
        tagline: "Diagnósticos, mejoras en planta y formación",
        diagnostics: "DIAGNÓSTICOS",
        consulting: "MEJORA OPERATIVA",
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

      // Elimina #formacion, #consultoria, #recursos, etc. de la URL
      window.history.replaceState(null, "", homePath);

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
          lg:grid-cols-[1fr_auto_1fr]
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
          className="flex items-center gap-3 lg:min-w-[300px] lg:justify-self-start"
        >
          <img
            src="/logo1.png"
            alt="Genba-Kai logo"
            className="h-14 w-auto object-contain md:h-16"
          />

          <div>
            <div className="whitespace-nowrap text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
              GENBA-KAI
            </div>

            <div className="text-xs leading-tight text-slate-500 md:text-sm">
              {isEnglish ? (
                <>
                  Diagnostics, operational
                  <br />
                  improvement and training
                </>
              ) : (
                <>
                  Diagnósticos, mejoras
                  <br />
                  en planta y formación
                </>
              )}
            </div>
          </div>
        </Link>

        {/* COLUMNA 2 — NAVEGACIÓN */}
        <nav
          className="
            order-3 mt-4
            grid w-full grid-cols-6 gap-1
            bg-white p-2
            text-slate-900
            lg:order-none
            lg:mt-0
            lg:w-auto
            lg:grid-cols-5
            lg:gap-0
            lg:px-3
            lg:py-3
            lg:justify-self-center
          "
        >
          {/* DIAGNÓSTICOS */}
          <Link
            href={isEnglish ? "/en/diagnosticos" : "/diagnosticos"}
              className="
              group col-span-2
              flex min-h-[70px] flex-col items-center justify-center
              gap-1.5 rounded-xl
              
              px-2 py-2 text-center
              transition-colors
              hover:bg-slate-50
              border border-slate-200
              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-0
              lg:w-[120px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <ClipboardCheck
              className="h-6 w-6 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[10px] font-medium tracking-normal leading-tight md:text-[11px] lg:max-w-[90px] whitespace-normal">
              {content.diagnostics}
            </span>
          </Link>

          {/* CONSULTORÍA */}
          <a
            href={isEnglish ? "/en#consultoria" : "/#consultoria"}
            onClick={handleNavClick}
            className="
              group col-span-2
              flex min-h-[70px] flex-col items-center justify-center
              gap-1.5 rounded-xl
              
              px-2 py-2 text-center
              transition-colors
              hover:bg-slate-50
              border border-slate-200
              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-0
              lg:w-[120px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <Settings
              className="h-6 w-6 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[10px] font-medium tracking-normal leading-tight md:text-[11px] lg:max-w-[90px] whitespace-normal">
              {content.consulting}
            </span>
          </a>

          {/* FORMACIÓN */}
          <a
            href={isEnglish ? "/en#formacion" : "/#formacion"}
            onClick={handleNavClick}
            className="
              group col-span-2
              flex min-h-[70px] flex-col items-center justify-center
              gap-1.5 rounded-xl

              px-2 py-2 text-center
              transition-colors
              hover:bg-slate-50
              border border-slate-200
              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-0
              lg:w-[120px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <BookOpen
              className="h-6 w-6 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[10px] font-medium tracking-normal leading-tight md:text-[11px] lg:max-w-[90px] whitespace-normal">
              {content.training}
            </span>
          </a>

          {/* RECURSOS */}
          <a
            href={isEnglish ? "/en#recursos" : "/#recursos"}
            onClick={handleNavClick}
            className="
              group col-span-3
              flex min-h-[70px] flex-col items-center justify-center
              gap-1.5 rounded-xl
              
              px-2 py-2 text-center
              transition-colors
              hover:bg-slate-50
              border border-slate-200
              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-0
              lg:w-[120px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <Library
              className="h-6 w-6 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[10px] font-medium tracking-normal leading-tight md:text-[11px] lg:max-w-[90px] whitespace-normal">
              {content.resources}
            </span>
          </a>

          {/* FERNANDO */}
          <a
            href={isEnglish ? "/en#sobre" : "/#sobre"}
            onClick={handleNavClick}
            className="
              group col-span-3
              flex min-h-[70px] flex-col items-center justify-center
              gap-1.5 rounded-xl

              px-2 py-2 text-center
              transition-colors
              hover:bg-slate-50
              border border-slate-200
              lg:col-span-1
              lg:min-h-[74px]
              lg:min-w-0
              lg:w-[120px]
              lg:rounded-none
              lg:border-0
              lg:px-4
              lg:py-2
            "
          >
            <UserRound
              className="h-6 w-6 text-slate-800 md:h-7 md:w-7"
              strokeWidth={1.8}
            />

            <span className="text-[10px] font-medium tracking-normal leading-tight md:text-[11px] lg:max-w-[90px] whitespace-normal">
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
            lg:justify-self-end
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