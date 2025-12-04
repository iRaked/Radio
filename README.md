# Radio Proxy

Proxy HTTPS para el stream de radio `http://178.32.146.184:2852/stream.mp3`.

## Uso
- Desplegar en Vercel.
- Endpoint resultante: `https://tu-app.vercel.app/api/radio`
- En el frontend usar:
  ```js
  const radioServer = "https://tu-app.vercel.app/api/radio";
  player.src = radioServer;
