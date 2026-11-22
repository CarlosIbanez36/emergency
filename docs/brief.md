🚨 FUNK EMERGENCY — Brief del proyecto
Concepto: Kit de emergencia musical contra el mal humor. "En caso de bad vibes, rompa el vidrio."
Un botón de pánico que administra una dosis aleatoria de funk/jazz melódico, más un buscador para encontrar tu propia medicina.
Stack: React + TypeScript + Vite (tu scaffold actual) · CSS propio con variables · API de iTunes (gratis, sin key, con CORS habilitado)
Modo: mentor — tú escribes el código en tu VS Code, yo doy misiones, pistas y feedback.
🎯 Qué hace la app (producto final)
Botón de pánico 🔴: al pulsarlo, busca una dosis aleatoria de funk (de una lista curada de artistas) y reproduce un preview de 30 segundos.
Buscador 🔎: escribes un artista o estilo ("Vulfpeck", "jazz fusion") y aparecen tarjetas con portada, título y botón de play.
Mini-player 🎧: una sola canción suena a la vez; play/pause, barra de progreso y carátula girando como vinilo.
(Extra, si llegamos) ⭐ Favoritos guardados en localStorage.
🎨 Especificación de diseño
Paleta (variables CSS):
css
:root {
  --crema:   #F6E7CE;  /* fondo */
  --naranja: #E8590C;  /* acento principal */
  --mostaza: #E9B44C;  /* marcos, detalles */
  --marron:  #3E2723;  /* texto */
  --rojo:    #D62828;  /* botón de emergencia */
  --morado:  #7B2D8E;  /* acento secundario */
}
Tipografía (Google Fonts): Shrikhand para títulos (100% funky) + Archivo o Space Grotesk para el cuerpo.
Estética: póster funk de los 70: esquinas redondeadas, sombras suaves, botón rojo grande tipo alarma, vinilos girando al reproducir. Referencia visual: funk-emergency-mockup.png.
Estructura de componentes sugerida:
src/
  components/
    Header.tsx          ← logo + tagline
    EmergencyButton.tsx ← el botón de pánico (props: label, onActivate)
    SearchBar.tsx       ← input controlado
    TrackCard.tsx       ← portada + título + artista + play
    Player.tsx          ← mini-player fijo abajo (misión 3)
  hooks/
    useITunes.ts        ← custom hook de búsqueda (misión 2)
  types.ts              ← interface Track
  App.tsx               ← orquesta todo
  index.css             ← paleta, fuentes, estilos base
📡 Chuleta de la API (iTunes Search)
Endpoint (funciona directo desde el navegador, sin API key):
https://itunes.apple.com/search?term=funk+jazz&entity=song&limit=24
term: lo que busque el usuario (espacios → + o usa encodeURIComponent)
entity=song: canciones con preview de 30 s
Respuesta: { resultCount: number, results: Track[] }
Tipo TypeScript para src/types.ts:
ts
export interface Track {
  trackId: number;
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string; // truco: reemplaza "100x100" por "600x600" para mejor calidad
  previewUrl?: string;   // audio .m4a de 30 s — algunos tracks no traen, ¡filtra!
  trackViewUrl: string;
}
⚠️ Ojo: límite ~20 peticiones/minuto → por eso usaremos debounce en el buscador.
Artistas para la dosis de emergencia (lista curada):
Vulfpeck · Cory Wong · Snarky Puppy · Herbie Hancock · Roy Ayers · Grover Washington Jr. · The Meters · Jamiroquai · Tom Misch · FKJ
🧗 Misiones
Misión 0 · Verificar el scaffold ✅
npm install y npm run dev en la carpeta emergency
Ver la página de demo de Vite en el navegador
Limpiar App.tsx: fuera contador, logos e import de App.css
Misión 1 · UI estática (la cara de la app) ✅
index.css con paleta de variables + fuentes + fondo crema
Header.tsx: título "FUNK EMERGENCY" + tagline
EmergencyButton.tsx con props tipadas { label: string; onActivate: () => void }
Botón rojo grande, centrado, con efecto hover (escala o vibración)
Al hacer clic: alert de prueba (la lógica real viene en la misión 4)
Misión 2 · El buscador (aquí atacamos useEffect 💪) — en curso 🔄
M2a · Primer fetch:
src/types.ts con la interface Track
SearchBar.tsx: input controlado (estado query vive en App)
useEffect en App que hace fetch a iTunes cuando cambia query
Ver los resultados en la consola del navegador (F12)
M2b · Pintar resultados:
Estado tracks + los 4 estados: cargando / error / vacío / éxito
TrackCard.tsx renderizando la lista (¡ojo con la key!)
M2c · Nivel pro:
Debounce de ~500 ms con cleanup del useEffect
Refactor: extraer la lógica a hooks/useITunes.ts
Misión 3 · El mini-player (audio + cleanup)
Un solo elemento Audio compartido (useRef)
Estado: qué track suena, play/pause
Barra de progreso (timeupdate) y carátula girando
Cleanup: al desmontar o cambiar de track, la música anterior se detiene
Misión 4 · El botón de pánico cobra vida
Al pulsar: artista aleatorio de la lista curada → fetch → preview aleatorio → play
Animación de "alarma" mientras se administra la dosis 🚨
Misión 5 · Pulido + GitHub
Responsive (móvil primero), detalles de hover/transiciones
README con GIF/captura, stack y link al deploy
Deploy en Vercel o Netlify
Commits limpios en cada checkpoint
✅ Definición de "terminado"
Buscas, encuentras, reproduces; el botón de pánico funciona; no hay errores en consola; se ve bien en móvil; repo público con README y demo en vivo. Eso es un proyecto de portafolio. 🏆