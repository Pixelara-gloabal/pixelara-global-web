import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Relative assets work on Netlify production and deploy-preview URLs.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
});
