import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
    const paths = [
    {
        title: "Assess the current state of the operation",
        description:
        "Identify the main improvement opportunities before starting any implementation.",
        button: "Explore diagnostics",
        href: "/diagnosticos",
        variant: "primary",
    },
    {
        title: "Implementation and support",
        description:
        "On-site and online support focused on improving operational stability and developing people.",
        button: "The Genba-Kai approach",
        href: "#consultoria",
        variant: "secondary",
    },
    {
        title: "Training",
        description:
        "Ebooks, courses and resources designed to develop practical judgment based on TPS principles.",
        button: "Coming soon",
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
            OPERATIONAL IMPROVEMENT FOR INDUSTRIAL SMEs
            </p>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Helping industrial SMEs build production systems that restore stability and enable controlled growth.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            A practical approach that transforms disorganized processes into a simple, visible and sustainable production system.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <a
                href="/en/diagnostics"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
                >
                Explore diagnostics
                </a>

                <a
                href="/en#consultoria"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800"
                >
                How Genba-Kai works
                </a>
            </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <img
                src="/hero-industrial.png"
                alt="Industrial environment with standardized work and visual management"
                className="w-full h-full object-cover"
                />
            </div>
            </div>
        </div>
        </section>

        <section id="problema" className="mx-auto max-w-6xl px-6 py-15">
        <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            THE CHALLENGE
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Many improvement initiatives fail not because of a lack of tools, but because of a lack of operational stability.
            </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">
                Tools without understanding
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                Applying techniques without developing problem-solving capability often leads to superficial improvements.
            </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">
                Improvement without standards
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                Without operational stability, improvements are difficult to sustain over time.
            </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">
                Limited people development
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                Sustainable improvement begins when people understand, follow and improve standards.
            </p>
            </div>
        </div>
        </section>

        <section id="enfoque" className="bg-slate-50 py-15">
        <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                THE GENBA-KAI APPROACH
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Understand and stabilize before improving.
            </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">
                Establish and understand the standard
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Improvement begins with a clear reference for how the process should operate.
                </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">
                Observe at the Genba
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                The actual condition of the operation is the starting point for diagnosis and decision-making.
                </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">
                Develop people
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Team learning and capability development are essential to sustain continuous improvement.
                </p>
            </div>
            </div>
        </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-15">
        <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            THREE WAYS TO GET STARTED
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Three ways to begin improving operational performance
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

        <section id="consultoria" className="bg-slate-50 py-15 scroll-mt-28 py-15">
        <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                CONSULTING
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Practical implementation to build stronger and more sustainable operations.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
                Practical consulting for industrial companies seeking to build their own
                production systems, strengthen operational standards, making abnormalities visible, 
                develop people and improve performance in a sustainable way.
            </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                On-site implementation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Practical implementation focused on building a production system adapted
                to the operation, developing standards, strengthening
                teams and turning improvement into a sustainable way of working.
                </p>

                <a
                href="/Brochure_Genba-Kai_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                VIEW CONSULTING BROCHURE (SPANISH)
                </a>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                Mentoring for leaders
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Online mentoring for owners, managers and operational leaders who need
                to analyze challenges, establish priorities and make better decisions
                about their operations.
                </p>

                <a
                href="mailto:fernando.benitez@genbakai.com"
                className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                Get in touch
                </a>
            </div>
            </div>
        </div>
        </section>

        <section id="formacion" className="scroll-mt-28 py-15">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.8fr_0.8fr] md:items-center">
            <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                TRAINING
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Learn how to build production systems tailored to each operation.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
                Practical resources for designing, implementing and sustaining
                production systems grounded in Lean thinking and TPS principles,
                adapted to the reality of industrial SMEs.
            </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">Ebooks</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Conceptual and practical resources to understand the fundamentals of
                production systems and apply them to real operating conditions.
                </p>

                <button className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium">
                Coming soon
                </button>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">Courses</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Structured programs to develop a deeper understanding of TPS principles,
                operational stability and people development.
                </p>

                <button className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium">
                Coming soon
                </button>
            </div>
            </div>
        </div>
        </section>

        <section id="sobre" className="bg-slate-50 py-15 scroll-mt-28 py-15">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
            <div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <img
                src="/fernando-benitez.png"
                alt="Fernando Benitez"
                className="h-full w-full object-cover"
                />
            </div>
            </div>

            <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                ABOUT FERNANDO
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Experience in production systems, process engineering and people development.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
                Fernando Benitez is a mechanical aeronautical engineer with 14 years of
                experience at Toyota Argentina and Toyota do Brasil, working in process
                engineering, production projects, operational improvement and team leadership.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
                His experience includes production launches, model changes, capacity
                expansion, standardized work, maintenance, visual management and the
                application of Toyota Production System principles in real manufacturing
                environments.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600">
                Today, that experience is applied through Genba-Kai to help industrial SMEs
                build more stable, visible and sustainable production systems.
            </p>

            <a
                href="https://www.linkedin.com/in/fernando-horacio-benitez/?locale=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
                View LinkedIn profile
            </a>
            </div>
        </div>
        
        </section>

        <section id="comunidad" className="border-y border-slate-200 bg-white scroll-mt-28 py-15">
        <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            NEW RESOURCES
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Practical Genba-Kai resources directly to your inbox.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
            Subscribe to receive new diagnostics, articles, ebooks, courses and
            resources focused on operational improvement for industrial SMEs.
            </p>

            <NewsletterForm language="en" />
        </div>
        </section>

        <section className="bg-slate-50 py-15">
        <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                NEXT STEP
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Process improvement begins with understanding how the operation works today.
            </h2>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                href="/en/diagnostics"
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white"
                >
                Explore diagnostics
                </a>

                <a
                href="/en#consultoria"
                className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-normal text-slate-800"
                >
                View consulting
                </a>
            </div>
            </div>
        </div>
        </section>

    </main>
  );
}