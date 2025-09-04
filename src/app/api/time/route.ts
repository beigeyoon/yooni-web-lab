// 서버 시각 + 난수 + 캐시 전략을 내려주는 API
import { getTimePayload } from '@/lib/time';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const delay = Number(searchParams.get('delay') ?? '0');
  const smax = Number(searchParams.get('smax') ?? '0');

  const body = await getTimePayload({ delayMs: delay });

  const headers: Record<string, string> = { 'content-type': 'application/json' };
  if (smax > 0) {
    headers['cache-control'] = `public, s-maxage=${smax}, stale-while-revalidate=59`;
  } else {
    headers['cache-control'] = 'no-store';
  }

  return new Response(JSON.stringify(body, null, 2), { headers });
}
