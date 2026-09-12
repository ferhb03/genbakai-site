export default function EbooksPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
          Resources
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Ebooks
        </h1>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Genba-Kai ebooks are currently available in Spanish. English versions are being prepared.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <a
            href="/ebooks"
            className="inline-flex rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            View ebooks in Spanish
          </a>

          <a
            href="/en"
            className="inline-flex rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            ← Back to Genba-Kai
          </a>
        </div>

      </section>
    </main>
  );
}