export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default async function SSRPage() {
  const res = await fetch('http://localhost:3000/api/time', { cache: 'no-store' });
  const json = await res.json();

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">SSR (Server Side Rendering)</h1>

      {/* 특징 */}
      <div className="rounded-md border p-3 text-sm">
        <div className="font-semibold">특징</div>
        <ul className="list-disc pl-5">
          <li>매 요청마다 서버가 새 HTML을 만들어 보냄</li>
          <li>초기 HTML에 데이터가 포함되어 있음</li>
          <li>새로고침할 때마다 값이 달라짐</li>
        </ul>
      </div>

      {/* 실험 가이드 */}
      <div className="rounded-md border bg-yellow-50 p-3 text-sm">
        <div className="font-semibold">🧪 실험 가이드</div>
        <ul className="list-disc pl-5">
          <li>페이지 소스 보기 → 데이터가 이미 들어있는지 확인</li>
          <li>새로고침 → random 값과 시각이 계속 달라지는지 확인</li>
          <li>Network 응답 헤더 → cache-control: no-store 확인</li>
        </ul>
      </div>

      {/* 출력 */}
      <pre className="rounded-md border p-3 text-xs">{JSON.stringify(json, null, 2)}</pre>

      <Link href="/labs/rendering" className="text-blue-600 hover:underline">
        ← 돌아가기
      </Link>
    </div>
  );
}
