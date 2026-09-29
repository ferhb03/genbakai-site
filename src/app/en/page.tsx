import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
    const paths = [
    {
        title: "Start with a self-assessment",
        description:
        "Assess your current operation and identify areas that need a closer look.",
        button: "Self-assessments",
        href: "/en/diagnosticos",
        variant: "primary",
    },
    {
        title: "On-site implementation and support",
        description:
        "Hands-on support to stabilize processes, improve productivity and strengthen daily management.",
        button: "The Genba-Kai approach",
        href: "#consultoria",
        variant: "secondary",
    },
    {
    title: "Training",
    description:
        "Practical courses and team training to develop problem-solving skills, strengthen leadership and support continuous improvement.",
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
            OPERATIONAL IMPROVEMENT FOR SMALL AND MEDIUM-SIZED MANUFACTURERS
            </p>

            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Make waste visible. Improve productivity, free up capacity and gain control of your operations.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            Genba-Kai helps you address the problems that drive up costs and limit output:
            scrap, rework, waiting, downtime, quality issues and processes that rely too heavily on a few key people.
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 font-semibold">
            We work alongside your team on the shop floor to solve problems and develop the skills and routines needed to sustain improvements.
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
                alt="Shop floor with standardized work and visual management"
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
            A plant can meet its production targets while wasting time, materials and capacity
            on recurring problems that have become part of the daily routine.
            </p>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">
                Unmeasured losses
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                Teams may recognize scrap, rework, waiting and downtime without knowing how much they affect cost, capacity and delivery.
            </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">
                Hidden costs of inefficiency
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                When waste becomes part of everyday work, it is easy to overlook the capacity it ties up and the costs it adds.
            </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold">
                Problems that become “normal”
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
                Recurring problems, firefighting and reliance on a few key people can become accepted as the normal way of working.
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
                Understand how work is actually done before deciding what to improve.
            </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">
                Go and see the work
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Start at the gemba: observe the work firsthand and understand the current process with the people who do it.
                </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">
                Measure losses and set priorities
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Measure losses, identify gaps between actual performance and the standard,
                and focus on the problems with the greatest impact.
                </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold">
                Improve processes and develop people
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Work with the team to address root causes, establish standards and build the daily routines needed to sustain and improve results.
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
            Start with the support your operation needs.
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
                Turn operational problems into lasting improvements.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
                We help small and medium-sized manufacturers understand operational problems, set priorities
                and improve productivity, capacity and quality through standardized work, problem solving and daily management.
                Our approach draws on Toyota Production System (TPS) and Lean manufacturing principles,
                adapted to your operation so your team can sustain results and keep improving.
            </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                On-site implementation
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                We work alongside your team to identify root causes, put improvements into practice,
                establish standards and strengthen the routines that sustain results.
                </p>

                <a
                href="/Brochure_Genba-Kai_2026_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                Download brochure
                </a>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                Mentoring for leaders
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Online mentoring for owners, managers and production leaders who need to work through
                operational challenges, set priorities and decide how to put improvements into practice.
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
                Build the skills to sustain continuous improvement.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
                Develop the ability to observe processes, recognize waste, solve problems and manage daily performance
                through practical training built around real situations on the shop floor.
            </p>
            </div>

            <div className="mt-10 grid gap-6 md:mt-0 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-semibold">
                Courses
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Structured courses in process stability, standardized work,
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
                Training for your team
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Training tailored to your team and leaders, with practical exercises
                based on the challenges they face at work.
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
                Practical tools to understand and improve your operations.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
                Ebooks, guides and tools to help manufacturing teams understand
                operational problems and apply Lean principles in their daily work.
            </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* EBOOKS */}
            <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">
                Ebooks
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                Practical guides to productivity, process stability, standardized work,
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
                Get updates on new self-assessments, articles, ebooks, courses and practical tools from Genba-Kai.
                </p>

                <div className="mt-6">
                <NewsletterForm language="en" />
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* ABOUT GENBA-KAI */}
        <section id="sobre" className="bg-white py-15 md:scroll-mt-34">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-5xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                About Genba-Kai
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Build systems your team can sustain without constant intervention.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Genba-Kai helps manufacturers build stable, efficient operations that their teams can manage without constant intervention from owners and managers.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">Mission</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Help manufacturers build more stable, efficient operations that their teams can sustain, reducing waste and the need for constant management intervention. This gives leaders more time to set direction, develop people and make decisions that shape the future of the business.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold">Vision</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Help small and medium-sized manufacturers grow in a structured way and strengthen their competitiveness, with efficient, stable production systems that their teams can sustain without constant intervention from owners and managers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT FERNANDO */}
        <section id="fernando" className="bg-slate-50 py-15 md:scroll-mt-34">
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
                Hands-on experience in production systems, process engineering and people development.
            </p>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
            <p>
                I spent 14 years at Toyota Argentina and Toyota do Brasil, working in manufacturing
                with a focus on productivity, standardized work, problem solving and team development.
            </p>

            <p>
                Today, I help small and medium-sized manufacturers apply that experience to their own operations,
                adapting it to their resources, organizational structure and challenges.
                Together, we improve productivity, free up capacity and develop management routines their teams can sustain.
            </p>

            <p className="italic text-slate-700">
                My approach starts with observing the work firsthand, establishing clear standards
                and addressing real problems. I help teams make complex processes easier to understand,
                manage and improve.
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
                Start by understanding where your operation is losing time, materials and capacity.
            </h2>
            <p>
                Let’s review your current processes, make waste visible
                and identify where improvement will have the greatest impact.
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
                Start a self-assessment
                </a>

            </div>
            </div>
        </div>
        </section>

    </main>
  );
}