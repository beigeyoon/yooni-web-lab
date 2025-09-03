export default function NetworkLab() {
  return (
    <main className="min-h-dvh bg-white">
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-2xl font-bold">Network Lab</h1>
        <p className="mt-2 text-gray-600">
          HTTP 캐시 헤더(max-age, s-maxage, stale-while-revalidate), Edge Runtime, Retry/Backoff, AbortController를 실습.
        </p>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🎯 목표</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>클라이언트/서버/프록시 캐시 관점 정리</li>
            <li>지연/타임아웃/취소 처리 UX 확립</li>
          </ul>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🧪 다음 스텝 (TODO)</h2>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>간단한 API 라우트 만들기(route handler)</li>
            <li>캐시 헤더 토글 UI + 응답 시간 시각화</li>
            <li>TanStack Query retry/backoff/abort 데모</li>
          </ol>
        </div>

        <a href="/" className="mt-8 inline-block text-blue-600">← 홈으로</a>
      </section>
    </main>
  );
}