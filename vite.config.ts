import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      comps: path.resolve(__dirname, 'src/components'),
    },
  },
  plugins: [vue(), vueJsx()],
  build: {
    outDir: 'lib',
    assetsDir: '',
    sourcemap: true,
    manifest: true,
    lib: {
      name: 'lnui',
      entry: './packages/index.ts'
    }
  }
}));
