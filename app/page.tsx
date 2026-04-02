export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_42%),linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)] text-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-3xl space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            Next.js Template
          </p>
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              A clean foundation for production Next.js apps.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Shared components, utilities, library code, and app-specific layers are organized so new projects can start from a practical, scalable baseline.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-700">
            <span className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 shadow-sm">
              Components
            </span>
            <span className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 shadow-sm">
              Lib and utils
            </span>
            <span className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 shadow-sm">
              Types and constants
            </span>
            <span className="rounded-full border border-slate-300 bg-white/80 px-4 py-2 shadow-sm">
              Services and hooks
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
