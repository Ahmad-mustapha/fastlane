import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React runtime — tiny, cached forever
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Animation library — large, rarely changes
          'framer-motion': ['framer-motion'],
          // Icon libraries
          'icons': ['lucide-react', 'react-icons'],
          // Radix / shadcn UI primitives
          'radix-ui': ['@radix-ui/react-slot', 'embla-carousel-react', 'embla-carousel'],
        },
      },
    },
  },
})


