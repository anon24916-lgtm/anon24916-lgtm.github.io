import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  base: '/',      // for a user site at https://<username>.github.io/
  build: { outDir: 'dist' }
})
