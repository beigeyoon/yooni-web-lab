export const dynamic = 'force-static';
export const revalidate = false;

import { getTimePayload } from '@/lib/time';
import Link from 'next/link';

const buildStamp = new Date().toISOString();
const buildRandom = Math.random();

export default async function SSGPage() {
  const json = await getTimePayload();

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">SSG (Static Site Generation)</h1>

      {/* 특징 */}
      <div className="rounded-md border p-3 text-sm">
        <div className="font-semibold">특징</div>
        <ul className="list-disc pl-5">
          <li>빌드/사전생성 시점의 값이 HTML에 “박혀” 고정됨</li>
          <li>새 빌드 전까지 값이 안 바뀜</li>
          <li>초기 HTML에도 값이 포함되어 있음</li>
        </ul>
      </div>

      {/* 실험 가이드 */}
      <div className="rounded-md border bg-yellow-50 p-3 text-sm">
        <div className="font-semibold">🧪 실험 가이드</div>
        <ul className="list-disc pl-5">
          <li>prod 모드(pnpm build && pnpm start) 실행</li>
          <li>페이지 소스 보기 → 값이 들어있고 고정됨</li>
          <li>새로고침 → 값이 절대 안 바뀜</li>
        </ul>
      </div>

      {/* 출력 */}
      <div className="rounded-md border p-3">
        <div className="font-semibold">Build Stamp (사전생성 시각)</div>
        <div className="font-mono text-sm">{buildStamp}</div>
      </div>
      <div className="rounded-md border p-3">
        <div className="font-semibold">Random at Build</div>
        <div className="font-mono text-sm">{buildRandom}</div>
      </div>

      <pre className="rounded-md border p-3 text-xs">{JSON.stringify(json, null, 2)}</pre>

      <Link href="/labs/rendering" className="text-blue-600 hover:underline">
        ← 돌아가기
      </Link>
    </div>
  );
}
