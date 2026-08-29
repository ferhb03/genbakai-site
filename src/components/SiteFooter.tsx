import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr] md:gap-12">
          
          <div>
            <Link href="/" className="inline-block">
              <div className="text-lg font-semibold tracking-tight text-slate-900">
                GENBA-KAI®
              </div>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
              Mejora operativa para PyMEs industriales.
            </p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Diagnósticos, consultoría y formación basados en principios del
              Toyota Production System.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navegación
            </p>

            <nav className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
              <Link
                href="/diagnosticos"
                className="transition-colors hover:text-slate-900"
              >
                Diagnósticos
              </Link>

              <a
                href="/#consultoria"
                className="transition-colors hover:text-slate-900"
              >
                Consultoría
              </a>

              <a
                href="/#formacion"
                className="transition-colors hover:text-slate-900"
              >
                Formación
              </a>

              <a
                href="/#comunidad"
                className="transition-colors hover:text-slate-900"
              >
                Comunidad
              </a>

              <a
                href="/#sobre"
                className="transition-colors hover:text-slate-900"
              >
                Acerca de Fernando
              </a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Información
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <Link href="/privacidad">
                Política de privacidad
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
            © 2026 Genba-Kai. Todos los derechos reservados.
          </p>

          <p className="mt-2 text-xs text-slate-500 md:mt-0">
            Genba-Kai® es una marca registrada.
          </p>
        </div>
      </div>
    </footer>
  );
}