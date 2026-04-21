import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-4 md:flex md:items-center md:justify-between md:px-6 md:py-5">
        <div className="flex items-center gap-3">
          <img
            src="/logo1.png"
            alt="Genba-Kai logo"
            className="h-10 w-auto object-contain md:h-20"
          />

          <div>
            <div className="text-lg font-semibold tracking-tight md:text-xl">
              GENBA-KAI
            </div>
            <div className="text-xs text-slate-500 md:text-sm">
              Diagnósticos, formación y consultoría
            </div>
          </div>
        </div>

        <nav className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs md:mt-0 md:flex md:flex-wrap md:gap-6 md:text-sm font-semibold">
          <Link href="/diagnosticos" className="whitespace-nowrap hover:text-slate-700">
            DISGNÓSTICOS
          </Link>
          <a href="/#formacion" className="whitespace-nowrap hover:text-slate-700">
            FORMACIÓN
          </a>
          <a href="/#comunidad" className="whitespace-nowrap hover:text-slate-700">
            COMUNIDAD
          </a>
          <a href="/#consultoria" className="whitespace-nowrap hover:text-slate-700">
            CONSULTORÍA
          </a>
          <a href="/#sobre" className="whitespace-nowrap hover:text-slate-700">
            ACERCA DE FERNANDO
          </a>
        </nav>
      </div>
    </header>
  );
}