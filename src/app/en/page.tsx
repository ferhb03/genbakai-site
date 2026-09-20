import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
    const paths = [
    {
        title: "Start with a self-assessment",
        description:
        "Review key areas of your operation and identify signals that may require deeper analysis.",
        button: "Self-assessments",
        href: "/diagnosticos",
        variant: "primary",
    },
    {
        title: "On-site implementation and support",
        description:
        "Practical support to improve stability, productivity and management capability directly in the operation.",
        button: "The Genba-Kai approach",
        href: "#consultoria",
        variant: "secondary",
    },
    {
    title: "Training",
    description:
        "Courses and company training designed to develop practical judgment, management capabilities and continuous improvement skills.",
    button: "View training",
    href: "#formacion",
    variant: "secondary",
    },
    ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

        {/* HERO */}
        <section id="top" className="bg-slate-50 pt-5 pb-15">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            OPERATIONAL IMPROVEMENT FOR INDUSTRIAL SMEs
            </p>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Make operational losses visible. Improve productivity, capacity and control.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Helping to identify and implement improvements in the problems that increase costs and limit production:
            scrap, rework, waiting time, downtime, quality issues and processes that depend too heavily on specific people.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 font-semibold">
            Working directly on the shop floor with your team to implement improvements and build the internal capability to sustain them.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <a
                href="/en/diagnosticos"
                className="rounded-2xl bg-slate-900 px-4 py-4 text-sm font-semibold text-white"
                >
                Self-assessments
                </a>

                <a
                href="/en#consultoria"
                className="rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-800"
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

        {/* PROBLEMA */}
        <section id="problema" className="mx-auto max-w-6xl px-6 py-15">
        <div className="max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
            THE CHALLENGE
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Operational losses are not always visible in the numbers you track.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            A plant can keep producing while losing time, capacity and resources through
            problems that gradually become part of the normal routine.
            </p>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">
                Losses that are not measured
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                Scrap, rework, waiting time and downtime may be known, but their real operational impact is not always quantified.
            </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">
                Inefficiencies absorbed into the operation
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                When losses become part of the daily routine, it becomes difficult to understand how much capacity and cost they are consuming.
            </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">
                Problems that become “normal”
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                Repeated issues, firefighting and dependency on key people can become accepted as part of the way the operation works.
            </p>
            </div>
        </div>
        </section>

        {/* ENFOQUE */}
        <section id="enfoque" className="bg-slate-50 py-15">
        <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                THE GENBA-KAI APPROACH
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Understand the real operation before deciding what to improve.
            </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">
                Understand the real operation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Improvement starts by understanding how the process actually works today.
                </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">
                Identify and prioritize losses
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Observing the work on the shop floor, measure deviations and focus
                on the problems with the greatest operational impact.
                </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">
                Implement and build capability
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Working with the team to implement improvements, establish standards and build the capability to sustain them.
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
            Three ways to start improving your operation
            </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 items-stretch">
            {paths.map((item) => (
            <div
                key={item.title}
                className="flex h-full flex-col rounded-3xl border border-slate-200 p-6"
            >
                <h3 className="text-xl font-semibold">
                {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
                </p>

                <div className="mt-auto pt-6">
                {item.href ? (
                    <Link
                    href={item.href}
                    className={`inline-flex rounded-2xl px-4 py-4 text-sm font-semibold transition-colors ${
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
                    className="inline-flex cursor-default rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-500 opacity-60"
                    >
                    {item.button}
                    </button>
                )}
                </div>
            </div>
            ))}
        </div>
        </section>

        {/* CONSULTORÍA */}
        <section id="consultoria" className="bg-slate-50 md:scroll-mt-34 py-15">
        <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                OPERATIONAL IMPROVEMENT
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                From operational problems to implemented improvements.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
                Working directly with industrial SMEs to analyze operational problems, define priorities
                and implement improvements in productivity, capacity, quality, standards and daily management.
                The goal is not only to improve performance, but to leave behind a way of working that
                the team can sustain and continue improving.
            </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                On-site implementation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Working directly with the team to identify root causes, implement improvements,
                establish standards and strengthen the routines needed to sustain results.
                </p>

                <a
                href="/Brochure_Genba-Kai_2026_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                Operational brochure
                </a>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                Mentoring for leaders
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Online mentoring for owners, managers and operational leaders who need to analyze
                operational challenges, set priorities and make better implementation decisions.
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

        {/* FORMACIÓN */}
        <section id="formacion" className="py-15 md:scroll-mt-28">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.8fr_0.8fr] md:items-center">
            <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                TRAINING
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Develop the capabilities needed to sustain operational improvement.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
                Practical training designed to develop operational judgment, problem-solving capability
                and management routines that can be applied directly to real situations on the shop floor.
            </p>
            </div>

            <div className="mt-10 grid gap-6 md:mt-0 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                Courses
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Structured programs focused on operational stability, standardization,
                problem solving and continuous improvement.
                </p>

                <button
                disabled
                className="mt-6 rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-500 opacity-60 cursor-default"
                >
                Coming soon
                </button>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                In-company training
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Practical training for teams and leaders, designed around real operational
                challenges and applied directly to the workplace.
                </p>

                <a
                href="mailto:fernando.benitez@genbakai.com?subject=Genba-Kai%20Training%20Inquiry"
                className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
                >
                Get in touch
                </a>
            </div>
            </div>
        </div>
        </section>

        {/* RECURSOS */}
        <section id="recursos" className="border-y border-slate-200 bg-slate-50 py-15 md:scroll-mt-28">
        <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-5xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                RESOURCES
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Practical resources to improve how you see and manage your operation.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
                Ebooks, guides and practical tools designed to help industrial teams understand
                operational problems and apply improvement principles in real working environments.
            </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* EBOOKS */}
            <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                Ebooks
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Practical guides on productivity, operational stability, standardization,
                problem solving and continuous improvement.
                </p>

                <a
                href="/en/ebooks"
                className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                View ebooks
                </a>
            </div>

            {/* NEWSLETTER */}
            <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                New resources
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Receive updates about new self-assessments, articles, ebooks, training and practical Genba-Kai resources.
                </p>

                <div className="mt-6">
                <NewsletterForm language="en" />
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-15 scroll-mt-28 py-15">
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

            <h2 className="mt-3 mb-6 text-4xl font-semibold tracking-tight">
            Fernando Benitez
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
                Shop-floor experience in production systems, process engineering and people development.
            </p>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
            <p>
                I spent 14 years working at Toyota Argentina and Toyota do Brasil in industrial
                operations focused on productivity, standardization, problem solving and team development.
            </p>

            <p>
                Today, I work with industrial SMEs, adapting that experience to operations with
                very different structures, resources and challenges from those of a large company.
            </p>

            <p className="italic text-slate-700">
                My practical approach is based on direct observation of the process, operational
                standardization and solving real problems, simplifying complexity and turning it
                into clearer, more applicable and sustainable ways of working.
            </p>

            <p>
                I now work with owners, managers and plant leaders who need to improve productivity,
                recover capacity and build a management approach their own teams can sustain.
            </p>
            </div>

            <a  href="https://www.linkedin.com/in/fernando-horacio-benitez/?locale=en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-2xl border border-slate-300 px-4 py-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
            >
                View LinkedIn profile
            </a>
            </div>
        </div>
        
        </section>

        <section className="bg-slate-50 py-15">
        <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 text-center sm:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                NEXT STEPS
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Improving an operation starts by understanding where unnecessary losses are being generated.    
            </h2>
            <p>
                If you want to identify where your operation is consuming more time, capacity and resources
                than necessary, we can start by reviewing the current state together.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

                <a
                href="/en#consultoria"
                className="rounded-2xl bg-slate-900 px-4 py-4 text-sm font-medium text-white"
                >
                Review your operation
                </a>

                <a
                href="/en/diagnosticos"
                className="rounded-2xl border border-slate-300 px-4 py-4 text-sm font-normal text-slate-800"
                >
                Start self-assessment
                </a>

            </div>
            </div>
        </div>
        </section>

    </main>
  );
}