import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Matches your GitHub repository path: https://YOUR_USERNAME.github.io/pixelara-global/
  base: '/pixelara-global/',
  plugins: [
    react(),
    tailwindcss(),
  ],
});