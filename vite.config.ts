import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: [
      'react',
      'react-dom',
      'mermaid',
      'js2flowchart',
      'esprima',
      'java-parser'
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    // Fix for Excalidraw
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      VITE_APP_VERSION: JSON.stringify(process.env.npm_package_version),
      VITE_APP_NAME: JSON.stringify(process.env.npm_package_name)
    },
    // Needed for Excalidraw
    global: 'globalThis'
  },
  build: {
    // Enable minification and optimization
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug']
      }
    },
    // Split chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'supabase-vendor': ['@supabase/supabase-js'],
          'mermaid-vendor': ['mermaid'],
          'excalidraw-vendor': ['@excalidraw/excalidraw'],
          'code-analysis': ['esprima', 'java-parser', 'js2flowchart']
        }
      }
    },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    // Enable source maps only in development
    sourcemap: process.env.NODE_ENV === 'development',
    // Optimize CSS
    cssCodeSplit: true,
    // Enable module preload polyfill
    modulePreload: {
      polyfill: true
    }
  },
  server: {
    port: 5173,
    host: true,
    // Enable HMR
    hmr: true,
    // Optimize dependencies on startup
    force: true
  },
  preview: {
    port: 4173,
    host: true,
  },
  // Enable caching
  cacheDir: '.vite'
});