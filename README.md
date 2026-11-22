# 🚨 FUNK EMERGENCY

Kit de emergencia musical contra el mal humor. *En caso de bad vibes, rompa el vidrio.*

Un botón de pánico que administra una dosis aleatoria de funk/jazz y un buscador para encontrar tu propia medicina, con un mini-player para escuchar previews de 30 segundos.

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- JavaScript con JSX
- CSS propio con variables y Google Fonts (Shrikhand + Archivo)
- [iTunes Search API](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/) (gratis, sin API key y con CORS habilitado)

## Scripts

| Comando | Acción |
| --- | --- |
| `npm install` | Instala las dependencias |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run preview` | Previsualiza el build |
| `npm run lint` | Ejecuta ESLint |

## Estructura

```text
src/
  components/
    Header.jsx          # logo + tagline
    EmergencyButton.jsx # botón de pánico
    SearchBar.jsx       # input controlado
  App.jsx               # orquesta todo
  main.jsx              # punto de entrada
  index.css             # paleta, fuentes y estilos base
docs/
  brief.md              # brief y misiones del proyecto
```

## API

Búsqueda de canciones y previews de 30 segundos:

```text
https://itunes.apple.com/search?term=funk+jazz&entity=song&limit=24
```

La API limita a ~20 peticiones por minuto, por eso el buscador debe usar *debounce*.

## Estado

En desarrollo. Completado: UI base (header, botón de pánico y buscador) y primer `fetch` a iTunes. Siguientes pasos: pintar resultados, *debounce*, mini-player y botón de pánico funcional. El detalle está en [docs/brief.md](docs/brief.md).