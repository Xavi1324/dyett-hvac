# Dyett HVAC Pro Corp. — Sitio web

Sitio web de Dyett HVAC Pro Corp. (Elizabeth, NJ), diseñado en Figma y exportado desde Figma Make.

**Stack:** React 19 · Vite 8 · TypeScript · Tailwind CSS v4 (sitio estático).

## Requisitos

- Node.js 22
- pnpm 10 (`corepack enable` o `npm i -g pnpm`)

## Comandos

```bash
pnpm install        # instalar dependencias
pnpm dev            # servidor local (puerto 8443 por defecto, o $PORT)
pnpm build          # build de producción en dist/
pnpm preview        # previsualizar el build
```

## Despliegue

Es un sitio estático. En Vercel / Netlify / Cloudflare Pages:

- **Build command:** `pnpm build`
- **Output directory:** `dist`
- **Install command:** `pnpm install`

## Pendientes

- **Formulario de contacto:** actualmente solo muestra un mensaje de éxito; no envía datos (`ContactForm` en `src/App.tsx`). Planeado: guardar los envíos en Supabase (con panel) o en Google Sheets.
- **Dominio:** configurar el dominio propio en el proveedor de hosting.
- **SEO (opcional):** agregar `sitemap.xml` y enviarlo a Google Search Console.

## Indexación

El sitio está abierto a buscadores: `.figma/make/site.json` tiene `robots.index: true`, por lo que no se genera un `robots.txt` bloqueante.

## Notas

- La carpeta `.figma/` la usa Figma Make para reimportar el proyecto; se mantiene en el repo.
- `vite.config.ts` incluye plugins propios de Figma Make; no los elimines sin probar el build.
