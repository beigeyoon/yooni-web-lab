import Link from 'next/link';

export default function BundlingLab() {
  return (
    <main className="min-h-dvh bg-white">
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-2xl font-bold">Bundling Lab</h1>
        <p className="mt-2 text-gray-600">
          코드 스플리팅, 이미지/폰트 최적화, 번들 사이즈 분석과 Turbopack/Webpack/Vite 비교를 다룰
          예정.
        </p>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🎯 목표</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>dynamic import / React.lazy / RSC 전략 비교</li>
            <li>분석 도구(next-bundle-analyzer 등) 리포팅 자동화</li>
          </ul>
        </div>

        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">🧪 다음 스텝 (TODO)</h2>
          <ol className="list-decimal pl-6 text-gray-700">
            <li>bundle analyzer 세팅</li>
            <li>이미지 최적화(Next/Image) 전후 차트</li>
            <li>Turbopack vs Webpack dev 속도 측정(간단 지표)</li>
          </ol>
        </div>

        <Link href="/" className="mt-8 inline-block text-blue-600">
          ← 홈으로
        </Link>
      </section>
    </main>
  );
}
