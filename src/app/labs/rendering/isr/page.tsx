export const revalidate = 30; // 30초마다 백그라운드 재생성

import Link from 'next/link';

export default async function ISRPage() {
  const res = await fetch('http://localhost:3000/api/time?smax=30', {
    next: { revalidate: 30 },
  });
  const json = await res.json();

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">ISR (Incremental Static Regeneration)</h1>

      {/* 특징 */}
      <div className="rounded-md border p-3 text-sm">
        <div className="font-semibold">특징</div>
        <ul className="list-disc pl-5">
          <li>정적으로 생성되지만 일정 주기마다 백그라운드에서 재생성됨</li>
          <li>주기 내에서는 값이 고정됨</li>
          <li>주기 이후 첫 요청에서 값이 갱신됨</li>
        </ul>
      </div>

      {/* 실험 가이드 */}
      <div className="rounded-md border bg-yellow-50 p-3 text-sm">
        <div className="font-semibold">🧪 실험 가이드</div>
        <ul className="list-disc pl-5">
          <li>처음 열었을 때 random/시각 기억</li>
          <li>30초 이내 새로고침 → 값이 그대로</li>
          <li>30초 지난 후 새로고침 → 값이 달라짐</li>
          <li>배포 환경에선 Network 헤더에서 x-vercel-cache(HIT/MISS) 확인</li>
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
