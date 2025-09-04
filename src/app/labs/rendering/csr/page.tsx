'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function CSRPage() {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  async function fetchNow() {
    setLoading(true);
    const res = await fetch('/api/time?delay=500'); // 0.5초 지연
    const json = await res.json();
    setData(json);
    setLoading(false);
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">CSR (Client Side Rendering)</h1>

      {/* 특징 */}
      <div className="rounded-md border p-3 text-sm">
        <div className="font-semibold">특징</div>
        <ul className="list-disc pl-5">
          <li>초기 HTML에는 데이터가 없음</li>
          <li>브라우저가 JS 실행 후 fetch 요청으로 데이터를 채움</li>
          <li>JS를 꺼두면 데이터가 영원히 안 보임</li>
        </ul>
      </div>

      {/* 실험 가이드 */}
      <div className="rounded-md border bg-yellow-50 p-3 text-sm">
        <div className="font-semibold">🧪 실험 가이드</div>
        <ul className="list-disc pl-5">
          <li>페이지 소스 보기 → 데이터가 없는 걸 확인</li>
          <li>DevTools Network → /api/time 요청이 발생하는지 확인</li>
          <li>아래 Fetch 버튼 눌러서 로딩/지연 체험</li>
        </ul>
      </div>

      {/* UI */}
      <button onClick={fetchNow} className="rounded border bg-white px-3 py-1 text-sm">
        Fetch Data
      </button>
      <div className="rounded-md border p-3">
        <div className="font-semibold">Payload</div>
        {loading ? (
          <div className="mt-2 h-16 animate-pulse bg-gray-100" />
        ) : (
          <pre className="mt-2 text-xs">{data ? JSON.stringify(data, null, 2) : '(아직 없음)'}</pre>
        )}
      </div>

      <Link href="/labs/rendering" className="text-blue-600 hover:underline">
        ← 돌아가기
      </Link>
    </div>
  );
}
