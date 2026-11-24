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

## Pendientes antes de salir a producción

- **Formulario de contacto:** actualmente solo muestra un mensaje de éxito; no envía datos (`ContactForm` en `src/App.tsx`). Conectarlo a un servicio (Formspree, Resend, etc.).
- **Indexación:** `.figma/make/site.json` tiene `robots.index: false`, lo que genera un `robots.txt` con `Disallow: /`. Cambiarlo a `true` cuando el sitio esté listo para aparecer en Google.
- **Dominio:** configurar el dominio propio en el proveedor de hosting.

## Notas

- La carpeta `.figma/` la usa Figma Make para reimportar el proyecto; se mantiene en el repo.
- `vite.config.ts` incluye plugins propios de Figma Make; no los elimines sin probar el build.
