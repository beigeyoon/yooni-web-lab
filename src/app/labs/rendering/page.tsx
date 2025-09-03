export default function RenderingLab() {
  return (
    <main className="min-h-dvh bg-white">
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-2xl font-bold">Rendering Lab</h1>
        <p className="mt-2 text-gray-600">
          CSR / SSR / SSG / ISR / RSC(서버 컴포넌트) / Streaming 비교를 단계별로 실험할 예정.
        </p>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🎯 목표</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>같은 데이터 소스 기준으로 렌더링 모드별 UX/성능 차이 확인</li>
            <li>캐싱(revalidate, etag)과 프리패치 전략 테스트</li>
          </ul>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🧪 다음 스텝 (TODO)</h2>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>공용 API 선택(Hacker News, PokeAPI 등)</li>
            <li>CSR + TanStack Query 기본 페이지</li>
            <li>SSR(서버 fetch), SSG/ISR(revalidate) 페이지</li>
            <li>RSC + Streaming 페이지</li>
          </ol>
        </div>

        <a href="/" className="mt-8 inline-block text-blue-600">← 홈으로</a>
      </section>
    </main>
  );
}