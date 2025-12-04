// Usamos runtime Node en Vercel (no Edge)
export const config = {
  runtime: "nodejs"
};

export default function handler(req, res) {
  const http = require("http");
  const streamUrl = "http://178.32.146.184:2852/stream.mp3";

  // Cabecera correcta para audio
  res.setHeader("Content-Type", "audio/mpeg");

  // Conectamos al stream original y lo reenviamos
  http.get(streamUrl, (streamRes) => {
    streamRes.pipe(res);
  }).on("error", (err) => {
    console.error("Proxy error:", err);
    res.statusCode = 500;
    res.end("Proxy error");
  });
}
