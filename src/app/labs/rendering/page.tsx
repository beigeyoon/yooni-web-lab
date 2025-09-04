import Link from 'next/link';

type Strategy = {
  name: string;
  href: string;
  desc: string;
  when: string;
  html: string;
  cache: string;
  test: string;
  code: string;
};

const strategies: Strategy[] = [
  {
    name: 'CSR',
    href: '/labs/rendering/csr',
    desc: '초기 HTML에는 데이터가 없고, 브라우저가 JS 실행 후 fetch로 채움.',
    when: '클라이언트에서 JS 실행 후 fetch',
    html: '초기 HTML엔 없음',
    cache: '브라우저 캐시 영향 (예제는 no-store)',
    test: '소스 보기 → 없음, Network에서 /api/time, 버튼으로 Fetch',
    code: `"use client";

export default function CSRPage() {
  const res = await fetch("/api/time");
}`,
  },
  {
    name: 'SSR',
    href: '/labs/rendering/ssr',
    desc: '요청마다 서버가 새 HTML을 생성. 새로고침할 때마다 값이 달라짐.',
    when: '요청마다 서버가 데이터 fetch → HTML 생성',
    html: '보임 (초기 HTML 포함)',
    cache: 'no-store로 매요청 새로 생성',
    test: '새로고침마다 random/시간 값 변함',
    code: `export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const res = await fetch("http://localhost:3000/api/time", {
    cache: "no-store",
  });
}`,
  },
  {
    name: 'SSG',
    href: '/labs/rendering/ssg',
    desc: '빌드/사전생성 시점 값이 박혀 고정. 새 빌드 전까지 안 바뀜.',
    when: '빌드/사전생성 시 단 한 번',
    html: '보임 (고정 값)',
    cache: '새 빌드 전까지 고정',
    test: 'prod 모드에서 새로고침해도 값 그대로',
    code: `export const dynamic = "force-static";
export const revalidate = false;

const buildStamp = new Date().toISOString();`,
  },
  {
    name: 'ISR',
    href: '/labs/rendering/isr',
    desc: '정적 페이지지만 일정 주기마다 백그라운드에서 다시 생성.',
    when: '정적 서빙 + 주기마다 백그라운드 재생성',
    html: '보임 (주기 내 고정)',
    cache: '주기 후 다음 요청에서 갱신',
    test: '30초 내 동일, 30초 지나 새로고침 시 변경',
    code: `export const revalidate = 30;

export default async function ISRPage() {
  const res = await fetch("http://localhost:3000/api/time?smax=30", {
    next: { revalidate: 30 },
  });
}`,
  },
];

export default function RenderingLab() {
  return (
    <div className="space-y-6 p-8">
      <h2 className="text-2xl font-bold">Rendering Lab</h2>
      <p className="text-sm text-gray-600">
        Next.js 렌더링 전략 네 가지를 직접 비교해보고, 각 페이지로 이동해서 테스트해보세요.
      </p>

      {/* column 구조 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {strategies.map((s) => (
          <div
            key={s.name}
            className="flex flex-col space-y-3 rounded-lg border bg-white p-4 shadow-sm"
          >
            <div>
              <h3 className="text-lg font-semibold text-blue-600">{s.name}</h3>
              <p className="text-xs text-gray-600">{s.desc}</p>
            </div>

            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold">언제: </span>
                {s.when}
              </p>
              <p>
                <span className="font-semibold">HTML: </span>
                {s.html}
              </p>
              <p>
                <span className="font-semibold">캐시: </span>
                {s.cache}
              </p>
            </div>

            <div className="text-xs text-gray-600">
              <span className="font-semibold">실험법:</span>
              <ul className="mt-1 list-disc space-y-1 pl-4">
                {s.test.split(', ').map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="flex-1">
              <pre className="overflow-x-auto rounded-md bg-gray-50 p-2 text-xs">{s.code}</pre>
            </div>

            <div>
              <Link href={s.href} className="text-sm font-medium text-blue-600 hover:underline">
                페이지 열기 →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-gray-500">
        팁: dev 모드보다 <code>pnpm build && pnpm start</code> (prod)나 Vercel 배포에서 차이가 더
        뚜렷함.
      </div>
    </div>
  );
}
