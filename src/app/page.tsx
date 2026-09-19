import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
    const paths = [
      {
        title: "Evaluación el estado actual de tu operación",
        description:
          "Descubrí las principales oportunidades de mejora antes de comenzar cualquier implementación.",
        button: "Ver diagnósticos",
        href: "/diagnosticos",
        variant: "primary",
      },
      {
        title: "Implementación y acompañamiento",
        description:
          "Acompañamiento presencial y online para mejorar estabilidad operativa y desarrollar personas.",
        button: "Cómo trabajamos",
        href: "#consultoria",
        variant: "secondary",
      },
      {
        title: "Formación",
        description:
          "Cursos y capacitación para desarrollar criterio práctico, capacidades de gestión y mejora continua.",
        button: "Ver Formación",
        href: "#formacion",
        variant: "secondary",
      },
    ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section id="top" className="bg-slate-50 py-15">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              MEJORA OPERATIVA EN PLANTA PARA PYMES INDUSTRIALES
            </p>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Menos pérdidas operativas. Más productividad, capacidad y control.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Analizamos e implementamos mejoras sobre los problemas que elevan costos y limitan la producción:
              scrap, retrabajos, esperas, paradas, desvíos de calidad y procesos que dependen demasiado de personas específicas.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 font-semibold">
              Trabajamos directamente en planta junto al equipo y transmitimos conocimiento para asegurar la sostenibilidad de las mejoras.
            </p>


            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/diagnosticos"
                className="rounded-2xl bg-slate-900 px-4 py-4 text-sm font-semibold text-white"
              >
                Hacer autodiagnóstico
              </a>
              <a
                href="/#consultoria"
                className="rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-800"
              >
                Cómo trabajamos
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-2">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <img
                src="/hero-industrial.png"
                alt="Entorno industrial con trabajo estandarizado y gestión visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="mx-auto max-w-6xl px-6 py-15">
        <div className="max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            El problema
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Las pérdidas operativas no siempre aparecen donde se las busca.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Una planta puede estar produciendo y cumpliendo pedidos mientras pierde materiales,
            horas, capacidad y recursos en problemas que se volvieron parte de la rutina.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Pérdidas que no se cuantifican</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Scrap, retrabajos, esperas y paradas existen,
              pero no siempre se conoce su impacto económico.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Costos que absorben ineficiencias</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Cuando las pérdidas quedan mezcladas dentro de la operación,
              es difícil saber cuánto cuesta realmente producir.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Problemas que se normalizan</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Desvíos repetitivos, urgencias y dependencia de personas
              específicas terminan aceptándose como parte del trabajo.
            </p>
          </div>
        </div>
      </section>

      {/* ENFOQUE */}
      <section id="enfoque" className="bg-slate-50 scroll-mt-34 py-15">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              El enfoque Genba-kai
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Antes de mejorar, hay que hacer visible dónde está la perdida.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Entender la operación real</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Observamos el proceso en planta para entender cómo funciona hoy,
                no cómo suponemos que debería funcionar.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Cuantificar y priorizar</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Identificamos pérdidas, restricciones y desvíos para concentrar
                los esfuerzos donde existe mayor impacto.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Implementar y sostener</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Trabajamos junto al equipo sobre las causas y dejamos estándares,
                indicadores y rutinas que permitan mantener la mejora.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-15">
        <div className="max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Tres caminos para empezar
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Empezamos según el problema que se necesita resolver.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {paths.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              {item.href ? (
                <Link
                  href={item.href}
                  className={`mt-6 inline-flex rounded-2xl px-4 py-4 text-sm font-semibold transition-colors ${
                    item.variant === "primary"
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "border border-slate-300 text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.button}
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-500 opacity-60 cursor-default"
                >
                  {item.button}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

        {/* CONSULTORÍA */}
        <section id="consultoria" className="bg-slate-50 md:scroll-mt-34 py-15">
        <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                Mejora operativa
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Del diagnóstico a la mejora implementada.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              No entregamos solamente recomendaciones. Trabajamos junto a responsables y equipos
              de planta para analizar problemas, implementar mejoras y desarrollar una forma de gestión
              que permita sostenerlas.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              El acompañamiento puede abarcar productividad, capacidad, calidad, estandarización, indicadores,
              resolución de problemas y desarrollo de líderes, según las prioridades detectadas en la operación.
            </p>

            </div>

            <div className="mt-10 grid gap-6 md:mt-0 md:grid-cols-2 py-10">
            <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                Mejoras en planta
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Acompañamiento directo desde el diagnóstico hasta la implementación
                de mejoras sobre problemas operativos concretos.
                </p>

                <a
                href="/Brochure_Genba-Kai_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-white hover:bg-slate-800 bg-slate-900"
                >
                DESCARGAR BROCHURE
                </a>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                Mentoría para líderes
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Acompañamiento para dueños, gerentes y responsables que necesitan ordenar prioridades,
                analizar problemas operativos y tomar mejores decisiones de implementación.
                </p>

                <a
                href="mailto:fernando.benitez@genbakai.com"
                className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                Contactanos
                </a>
            </div>
            </div>
        </div>
        </section>

      {/* FORMACION */}
      <section id="formacion" className="py-15 md:scroll-mt-34">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.8fr_0.8fr] md:items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              FORMACIÓN
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Desarrollar equipos capaces de sostener la mejora.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Formación práctica para que líderes y equipos aprendan a observar procesos, identificar pérdidas,
              trabajar con estándares, resolver problemas y gestionar mejoras dentro de su propia operación.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:mt-0 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">
                Cursos
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Formación práctica para equipos y líderes, enfocada en desarrollar capacidades que puedan aplicarse
                directamente sobre problemas reales de la operación.
              </p>

              <button
                disabled
                className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-500 opacity-60 cursor-default"
              >
                Próximamente
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">
                Capacitación para empresas
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Formación práctica para equipos y líderes, enfocada en desarrollar
                capacidades que puedan aplicarse directamente en la operación.
              </p>

              <a
                href="mailto:fernando.benitez@genbakai.com?subject=Consulta%20sobre%20capacitaci%C3%B3n%20Genba-Kai"
                className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="bg-slate-50 border-y border-slate-200 py-15 md:scroll-mt-34">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              RECURSOS
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Herramientas prácticas para seguir profundizando.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Guías, ebooks y recursos para comprender problemas operativos, analizar procesos
              y aplicar principios de mejora en situaciones reales de planta.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* EBOOKS */}
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">
                Ebooks
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Guías prácticas sobre productividad, estabilidad, estandarización,
                resolución de problemas y gestión de operaciones.
              </p>

              <a
                href="/ebooks"
                className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Ver ebooks
              </a>
            </div>

            {/* NEWSLETTER */}
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">
                Nuevos recursos
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Recibí novedades sobre nuevos diagnósticos, artículos, ebooks,
                cursos y herramientas prácticas de Genba-Kai.
              </p>

              <div className="mt-6">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE FERNANDO */}
      <section id="sobre" className="py-15 md:scroll-mt-34">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                <img
                  src="/fernando-benitez.png"
                  alt="Fernando Benitez en entorno industrial"
                  className="w-full h-full object-cover object-left"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                Acerca de Fernando
              </p>

              <h2 className="mt-3 mb-6 text-4xl font-semibold tracking-tight">
                Fernando Benitez
              </h2>



              <p className="mt-6 text-lg leading-8 text-slate-600">
                Experiencia desarrollada en Toyota, adaptada a la realidad de las PyMEs.
              </p>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
                <p>
                  Trabajé durante 14 años en Toyota Argentina y Brasil, en operaciones industriales
                  vinculadas a productividad, estandarización, resolución de problemas y desarrollo de equipos.
                </p>
                <p>
                  Actualmente trabajo junto a PyMEs industriales, adaptando esa experiencia
                  a operaciones con estructuras, recursos y desafíos muy diferentes a los de una gran compañía.
                </p>

                <p className="italic text-slate-700">
                  Mi enfoque práctico se basa en la observación directa del proceso, la
                  estandarización operativa y la resolución de problemas reales,
                  simplificando la complejidad para transformarla en sistemas más
                  claros, aplicables y sostenibles.
                </p>

                <p>
                  Hoy acompaño a dueños, gerentes y responsables de planta que necesitan mejorar
                  productividad, recuperar capacidad y construir una forma de gestión que puedan
                  sostener con su propio equipo.
                </p>
              </div>

              <a href="/#consultoria"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-4 text-sm font-normal text-slate-800 hover:bg-slate-100"
              >
               Mejora operativa
              </a>
            </div>
          </div>
        </div>
       </section>

      <section className="bg-slate-50 py-15">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Cierre
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Mejorar una operación comienza por entender dónde estan perdiendo recursos hoy.
            </h2>
            <p>
            Si querés hacer visibles las pérdidas que están consumiendo más tiempo, capacidad y recursos
            de los necesarios, podemos empezar por evaluar el estado actual.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="#consultoria"
                className="rounded-2xl bg-slate-900 px-4 py-4 text-sm font-semibold text-white"
              >
                Contactanos
              </a>
              <a
                href="/diagnosticos"
                className="rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-800"
              >
                Hacer autodiagnóstico
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
