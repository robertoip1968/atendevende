// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deploy em VPS (Hostgator): rode o build com NITRO_PRESET=node_server
// (ex.: `NITRO_PRESET=node_server npm run build`) para gerar um servidor Node
// autônomo em dist/server/index.mjs. Sem a variável, o build continua igual.
const preset = process.env.NITRO_PRESET;

export default defineConfig({
  ...(preset ? { nitro: { preset } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
