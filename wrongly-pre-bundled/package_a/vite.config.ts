import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [solid()],
  server: {
    port: 1420,
    strictPort: true,
  },
}));
