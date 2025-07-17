import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [
    tailwind(),
    sitemap(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  build: {
    inlineStylesheets: 'auto'
  },
  
  // Configurações de performance
  compressHTML: true,
  
  // Configurações de desenvolvimento
  server: {
    port: 3000,
    host: true
  },
  
  // Configurações de build otimizadas
  output: 'static',
  
  // Experimental features para performance
  experimental: {
    assets: true,
    viewTransitions: true
  },
  
  // Prefetch settings para navegação suave
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  }
});
