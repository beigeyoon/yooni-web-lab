export default function Home() {
  return (
    <main className="min-h-dvh bg-gray-50">
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight">
          Web Fundamentals Lab
        </h1>
        <p className="mt-2 text-gray-600">
          Next.js + TypeScript + TailwindCSS 학습 실험실
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Rendering", href: "/labs/rendering", desc: "CSR/SSR/SSG/ISR/RSC 비교" },
            { title: "State", href: "/labs/state", desc: "Zustand vs 서버상태 경계" },
            { title: "Browser", href: "/labs/browser", desc: "이벤트루프/무한스크롤/CORS" },
            { title: "Bundling", href: "/labs/bundling", desc: "Vite/Webpack/코드스플리팅" },
            { title: "Network", href: "/labs/network", desc: "HTTP 캐시/Edge/Retry" },
          ].map((lab) => (
            <a
              key={lab.title}
              href={lab.href}
              className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="text-lg font-semibold">{lab.title}</div>
              <div className="mt-1 text-sm text-gray-600">{lab.desc}</div>
              <div className="mt-4 text-sm text-blue-600">Enter →</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}