import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig(() => ({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
  ],
  optimizeDeps: {
    include: ["@modular-forms/solid"],
    esbuildOptions: {
      // it cannot be "preserve"
      jsx: "automatic",
      jsxDev: true,
      // not familiar with solid, but it looks like the right one is "solid-js/h" and not "solid-js" 
      jsxImportSource: "solid-js/h"
    }
  },
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
}));
