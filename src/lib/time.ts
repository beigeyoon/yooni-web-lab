export type TimePayload = {
  serverNowISO: string;
  serverNowEpoch: number;
  random: number;
};

export async function getTimePayload(params?: { delayMs?: number }) {
  const delayMs = params?.delayMs ?? 0;
  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
  const now = new Date();
  const payload: TimePayload = {
    serverNowISO: now.toISOString(),
    serverNowEpoch: now.getTime(),
    random: Math.random(),
  };
  return payload;
}
