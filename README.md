# 🎧 Radio Proxy en Vercel

Este proyecto crea un **proxy HTTPS** para el stream de radio `http://178.32.146.184:2852/stream.mp3`.  
Sirve para evitar bloqueos de *mixed content* en navegadores cuando tu frontend corre bajo HTTPS.

---

## 🚀 Cómo funciona
- El archivo `/api/radio.js` es una función serverless en Vercel.
- Recibe la petición y reenvía el flujo de audio como `audio/mpeg`.
- Tu reproductor `<audio>` apunta a este endpoint seguro en lugar de la URL insegura.

---
