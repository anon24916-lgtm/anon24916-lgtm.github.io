import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';

// Full Vite config for GitHub Pages (user site): base MUST be '/'.
// If you ever deploy to a project page, set VITE_BASE (e.g., '/my-repo/').

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // For a user site like https://<username>.github.io/ keep base at '/'
  // To override (e.g., project pages), export VITE_BASE="/repo-name/"
  const base = (env.VITE_BASE && env.VITE_BASE.trim()) || '/';

  // Try to enable React plugin if it's installed; otherwise run vanilla.
  const plugins: any[] = [];
  try {
    const react = (await import('@vitejs/plugin-react')).default;
    plugins.push(react());
  } catch {
    // no-op: plugin not installed, continue without it
  }

  return {
    base,
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
      port: 5173,
      open: true,
      strictPort: true,
    },
    preview: {
      host: true,
      port: 4173,
      strictPort: true,
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      target: 'es2018',
      sourcemap: true,
      // Avoid inlining to keep cache-busted asset filenames on Pages
      assetsInlineLimit: 0,
    },
    // Tip: keep a `.nojekyll` file at repo root so Pages serves folders starting with `_`.
  };
});
