export default function StateLab() {
  return (
    <main className="min-h-dvh bg-white">
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-2xl font-bold">State Lab</h1>
        <p className="mt-2 text-gray-600">
          앱 상태(Zustand)와 서버 상태(TanStack Query) 경계를 분리하고, persist/immer/미들웨어를 실험.
        </p>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🎯 목표</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>전역 상태 vs 서버 상태의 책임 구분</li>
            <li>SSR 호환 패턴과 하이드레이션 이슈 정리</li>
          </ul>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🧪 다음 스텝 (TODO)</h2>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>Zustand 기본 store + persist 적용</li>
            <li>TanStack Query로 목록/상세 + 캐시 데모</li>
            <li>Optimistic update / cancel / retry 연습</li>
          </ol>
        </div>

        <a href="/" className="mt-8 inline-block text-blue-600">← 홈으로</a>
      </section>
    </main>
  );
}