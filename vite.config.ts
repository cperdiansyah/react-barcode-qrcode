import react from '@vitejs/plugin-react';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), splitVendorChunkPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'React Barcode QrCode ',
      formats: ['es'],
      fileName: 'react-barcode-qrcode',
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const segments = id.split('/');
            const dir = segments[segments.lastIndexOf('node_modules') + 1];
            return `vendor-${dir}`;
          }
        },
      },
    },
  },
});
