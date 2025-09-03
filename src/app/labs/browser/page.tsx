export default function BrowserLab() {
  return (
    <main className="min-h-dvh bg-white">
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-2xl font-bold">Browser Lab</h1>
        <p className="mt-2 text-gray-600">
          이벤트 루프/큐, rAF, 스로틀·디바운스, IntersectionObserver, CORS/프리플라이트 등 브라우저 기초를 체험형으로.
        </p>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🎯 목표</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>렌더링/메인스레드 점유와 체감 UX의 관계 이해</li>
            <li>오프라인/Service Worker & Web Worker 기초</li>
          </ul>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🧪 다음 스텝 (TODO)</h2>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>스크롤 이벤트: throttle vs debounce 비교</li>
            <li>무한 스크롤: scroll 리스너 vs IntersectionObserver</li>
            <li>CORS 시뮬레이터(요청/응답 헤더 토글)</li>
          </ol>
        </div>

        <a href="/" className="mt-8 inline-block text-blue-600">← 홈으로</a>
      </section>
    </main>
  );
}