// /api/radio.js
export const config = { runtime: "edge" };

export default async function handler(req) {
  const streamUrl = "http://178.32.146.184:2852/stream.mp3";

  const resp = await fetch(streamUrl);
  if (!resp.ok) {
    return new Response("Error al conectar con el stream", { status: resp.status });
  }

  return new Response(resp.body, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "no-store"
    }
  });
}