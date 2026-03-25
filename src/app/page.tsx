import Link from "next/link";

export default function Home() {
  const paths = [
    {
      title: "Diagnósticos",
      description:
        "Herramientas gratuitas para evaluar el estado actual de procesos y operaciones.",
      button: "Ver diagnósticos",
    },
    {
      title: "Formación",
      description:
        "Ebooks, cursos y recursos para desarrollar criterio práctico basado en TPS.",
      button: "Explorar formación",
    },
    {
      title: "Consultoría",
      description:
        "Acompañamiento online y presencial para mejorar estabilidad operativa y desarrollar personas.",
      button: "Conocer consultoría",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xl font-semibold tracking-tight">GENBA-KAI</div>
            <div className="text-sm text-slate-500">
              Diagnósticos, formación y consultoría
            </div>
          </div>

          <nav className="hidden gap-6 text-sm md:flex">
            <Link href="/diagnosticos" className="hover:text-slate-700">
              Diagnósticos
            </Link>
            <a href="#formacion" className="hover:text-slate-700">
              Formación
            </a>
            <a href="#comunidad" className="hover:text-slate-700">
              Comunidad
            </a>
            <a href="#consultoria" className="hover:text-slate-700">
              Consultoría
            </a>
            <a href="#sobre" className="hover:text-slate-700">
              Sobre Fernando
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Desarrollo de personas para mejorar sistemas
            </p>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Estabilidad operativa basada en personas, estándar y criterio.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Diagnósticos, formación y consultoría inspirados en los principios
              del Toyota Production System.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#diagnosticos"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
              >
                Explorar diagnósticos
              </a>
              <a
                href="#enfoque"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800"
              >
                Conocer el enfoque
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8">
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm leading-6 text-slate-500">
              Imagen principal sugerida:
              <br />
              escena Gemba / tablero estándar / entorno industrial sobrio
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="mx-auto max-w-6xl px-6 py-20">
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

      <section id="enfoque" className="bg-slate-50 py-20">
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
              <h3 className="text-lg font-semibold">Observar en el Gemba</h3>
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

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Tres caminos para empezar
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Una plataforma para diagnosticar, aprender e implementar.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {paths.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              {item.title === "Diagnósticos" ? (
                <Link
                  href="/diagnosticos"
                  className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium"
                >
                  {item.button}
                </Link>
              ) : (
                <button className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium">
                  {item.button}
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="diagnosticos" className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Diagnóstico destacado
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Checklist 5S
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Evalúa el estado actual de la implementación de 5S y obtén una base
              inicial para detectar brechas y próximos pasos.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <p className="text-sm leading-6 text-slate-600">
              Puerta de entrada actual hacia el ecosistema Genba-kai. Aquí luego
              podrás mostrar también futuros diagnósticos.
            </p>
            <a
            href="https://checklists.genbakai.com/5s"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
            >
              Realizar diagnóstico
            </a>
          </div>
        </div>
      </section>

      <section id="formacion" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Formación
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Aprender principios TPS aplicados a operaciones reales.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Recursos diseñados para comprender la lógica del sistema, más allá de
            las herramientas. Incluye ebooks, cursos y materiales prácticos para
            desarrollar criterio en mejora continua.
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
              Ver ebook
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-xl font-semibold">Cursos</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Programas estructurados para profundizar en principios TPS,
              estabilidad operativa y desarrollo de personas.
            </p>
            <button className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium">
              Ver cursos
            </button>
          </div>
        </div>
      </section>

      <section id="consultoria" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Consultoría
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Acompañamiento para transformar criterio en implementación.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Modalidades flexibles para trabajar con profesionales, equipos y
              organizaciones que buscan mejorar estabilidad operativa y desarrollar
              capacidades internas.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">Mentoría online</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Sesiones remotas para analizar problemas, ordenar prioridades,
                revisar procesos y definir próximos pasos.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold">Consultoría presencial</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Acompañamiento en planta para observar en Gemba, detectar brechas,
                estandarizar y trabajar sobre oportunidades reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <div className="rounded-3xl border border-slate-200 bg-slate-100 p-6">
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-center text-sm text-slate-500">
              Foto profesional de Fernando
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
              Sobre Fernando
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
              Experiencia industrial aplicada a la mejora continua.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Fernando Benitez es ingeniero mecánico-aeronáutico con experiencia
              en operaciones industriales, mejora de procesos, estandarización y
              desarrollo de equipos. Genba-kai nace como una plataforma para
              compartir herramientas, formación y acompañamiento con una mirada
              práctica inspirada en el TPS.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800"
            >
              Conocer más
            </a>
          </div>
        </div>
      </section>

      <section id="comunidad" className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Comunidad futura
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Un espacio para seguir profundizando.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Genba-kai buscará crecer hacia una comunidad de profesionales
            interesados en estándar, liderazgo operativo y mejora continua con
            criterio práctico.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Tu email"
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none"
            />
            <button className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white">
              Recibir novedades
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center sm:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            Cierre
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Mejorar procesos comienza por comprender cómo funcionan hoy.
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#diagnosticos"
              className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
            >
              Explorar diagnósticos
            </a>
            <a
              href="#consultoria"
              className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800"
            >
              Ver consultoría
            </a>
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
              <div>LinkedIn</div>
              <div>fernando.benitez@genbakai.com</div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}