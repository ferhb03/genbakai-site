import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
    const paths = [
      {
        title: "Evaluá el estado actual de tu operación",
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
          "Ebooks, cursos y recursos para desarrollar criterio práctico basado en TPS.",
        button: "Próximamente",
        href: null,
        variant: "disabled",
      },
    ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      <section id="enfoque" className="bg-slate-50 pt-5 pb-15">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              MEJORA OPERATIVA PARA PyMEs INDUSTRIALES
            </p>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Construimos sistemas de producción para que las PyMEs industriales recuperen estabilidad y puedan crecer con mayor control.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Trabajamos junto al equipo para transformar procesos desordenados en un sistema simple, visible y sostenible que pueda mantenerse en el tiempo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/diagnosticos"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
              >
                Explorar diagnósticos
              </a>
              <a
                href="/#consultoria"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800"
              >
                Cómo trabajamos
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5">
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

      <section id="problema" className="mx-auto max-w-6xl px-6 py-15">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            El problema
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Muchas iniciativas de mejora no fallan por falta de herramientas,
            sino por falta de estabilidad.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Herramientas sin comprensión</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Aplicar técnicas sin desarrollar criterio genera mejoras
              superficiales.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Mejora sin estándar</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Sin estabilidad operativa, cualquier avance es difícil de sostener.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">Poco desarrollo de personas</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Los sistemas mejoran cuando el equipo comprende y practica el
              estándar.
            </p>
          </div>
        </div>
      </section>

      <section id="enfoque" className="bg-slate-50 py-15">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              El enfoque Genba-kai
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Antes de mejorar, entender y estabilizar.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Entender el estándar</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                La mejora comienza con una referencia clara de cómo debería
                funcionar el proceso.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Observar en el Genba</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                La realidad operativa es el punto de partida para diagnosticar y
                decidir.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold">Desarrollar personas</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                El aprendizaje del equipo es la base para sostener la mejora
                continua.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-15">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Tres caminos para empezar
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Tres formas de empezar a mejorar tu operación
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
                  className={`mt-6 inline-flex rounded-2xl px-4 py-2 text-sm font-semibold transition-colors ${
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
                  className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-500 opacity-60 cursor-default"
                >
                  {item.button}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="formacion" className="bg-slate-50 py-15">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.8fr_0.8fr] md:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Formación
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Aprender a construir sistemas de producción propios.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Recursos prácticos para comprender cómo diseñar, implementar
              y sostener sistemas de producción basados en principios Lean
              y Toyota Production System, adaptados a PyMEs industriales.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">Ebook</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Material conceptual y práctico para entender los fundamentos del
                sistema y aplicarlos en la realidad operativa.
              </p>
              <button className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium">
                Próximamente
              </button>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">Cursos</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Programas estructurados para profundizar en principios TPS,
                estabilidad operativa y desarrollo de personas.
              </p>
              <button className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium">
                Próximamente
              </button>
            </div>
          </div>
         </div> 
      </section>

      <section id="consultoria" className="mx-auto max-w-6xl px-6 py-15">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Consultoría
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Acompañamiento para transformar criterio en implementación.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Acompañamiento práctico para ayudar a empresas industriales
              a construir sistemas de producción propios, desarrollar personas
              y mejorar resultados de forma sostenible.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Conocé nuestra forma de trabajo y cómo acompañamos a las empresas
              desde el diagnóstico inicial hasta la implementación y el desarrollo
              de capacidades internas.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              El brochure presenta nuestra propuesta de valor, metodología de
              implementación, etapas de trabajo y modalidades de acompañamiento para
              PyMEs industriales.
            </p>

            <a
              href="/Brochure_Genba-Kai_2026.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-white hover:bg-slate-800 bg-slate-900"
            >
              BROCHURE - DESCARGAR PROPUESTA
            </a>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">Consultoría presencial</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Acompañamiento práctico para construir un sistema de producción propio,
                desarrollar estándares, fortalecer a los equipos y transformar la mejora
                en una forma de trabajo sostenible.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">Mentoría online</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Espacio de acompañamiento para dueños, gerentes y líderes que necesitan
                resolver desafíos operativos, ordenar prioridades y tomar mejores decisiones
                para avanzar en sus procesos de mejora.
              </p>
            </div>

          </div>
      </section>

      <section id="sobre" className="bg-slate-50 py-15">
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



              <p className="mt-4 text-lg leading-8 text-slate-600">
                Experiencia real en operaciones industriales, estandarización y mejora
                continua aplicada.
              </p>

              <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
                <p>
                  Con más de 15 años de experiencia en entornos industriales exigentes,
                  he trabajado en la implementación real de principios del Toyota
                  Production System (TPS), Lean Manufacturing y mejora continua en
                  plantas de Toyota en Argentina y Brasil.
                </p>

                <p className="italic text-slate-700">
                  Mi enfoque práctico se basa en la observación directa del proceso, la
                  estandarización operativa y la resolución de problemas reales,
                  simplificando la complejidad para transformarla en sistemas más
                  claros, aplicables y sostenibles.
                </p>

                <p>
                  Hoy acompaño a dueños, gerentes, líderes y equipos que buscan
                  recuperar estabilidad operativa, desarrollar personas y mejorar
                  resultados a través de métodos simples, concretos y alineados con la
                  realidad de planta.
                </p>
              </div>

              <a href="/#consultoria"
                className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-normal text-slate-800 hover:bg-slate-100"
              >
                Ver consultoría
              </a>
            </div>
          </div>
        </div>
       </section>

      <section id="comunidad" className="border-y border-slate-200 bg-white py-15">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Nuevos recursos
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Recibí herramientas prácticas de Genba-Kai
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Suscribite para recibir nuevos diagnósticos, artículos, ebooks, cursos y
            recursos sobre mejora operativa para PyMEs industriales.
          </p>

          <NewsletterForm />
          
        </div>
      </section>

      <section className="bg-slate-50 py-15">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Cierre
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Mejorar procesos comienza por comprender cómo funcionan hoy.
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/diagnosticos"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
              >
                Explorar diagnósticos
              </a>
              <a
                href="#consultoria"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-normal text-slate-800"
              >
                Ver consultoría
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">GENBA-KAI</div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Diagnósticos, formación y consultoría basados en principios del TPS.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navegación
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <div>Diagnósticos</div>
              <div>Formación</div>
              <div>Consultoría</div>
              <div>Sobre Fernando</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Contacto
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <a
                href="https://www.linkedin.com/in/fernando-horacio-benitez"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <div>fernando.benitez@genbakai.com</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}