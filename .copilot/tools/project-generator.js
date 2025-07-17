// Gerador automático de estrutura de projeto Astro + Sistema Multi-Persona
const projectStructure = {
  name: "Monetizefy AI - Multi-Persona Astro Generator",
  version: "2.0.0",
  
  // Comandos de setup otimizados
  commands: [
    "npm create astro@latest",
    "npx astro add tailwind",
    "npx shadcn-ui@latest init",
    "npm install framer-motion",
    "npm install @astrojs/sitemap",
    "npm install @astrojs/image",
    "npm install @astrojs/partytown",
    "npm install @astrojs/compress"
  ],
  
  // Estrutura de pastas otimizada
  structure: {
    "src/components/ui/": "shadcn components",
    "src/components/sections/": "landing page sections",
    "src/components/common/": "header, footer, navigation",
    "src/layouts/": "page layouts",
    "src/pages/": "file-based routes",
    "src/styles/": "global styles and themes",
    "src/utils/": "helper functions and hooks",
    "src/content/": "content collections",
    "public/images/": "optimized images and assets",
    ".copilot/personas/": "multi-persona system files"
  },
  
  // Setup completo automatizado com Multi-Persona
  setupScript: `
    echo "🎭 Monetizefy AI - Multi-Persona Project Setup"
    echo "============================================="
    
    # Criar projeto Astro otimizado
    npm create astro@latest . -- --template minimal --typescript
    
    # Adicionar integrações essenciais
    npx astro add tailwind sitemap
    
    # Instalar dependências de produção
    npm install @astrojs/image @astrojs/partytown @astrojs/compress
    npm install sharp framer-motion clsx tailwind-merge
    npm install @radix-ui/react-icons @radix-ui/react-slot
    npm install class-variance-authority lucide-react
    
    # Instalar dependências de desenvolvimento
    npm install -D @types/node prettier prettier-plugin-astro
    npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    npm install -D husky lint-staged
    
    # Setup shadcn/ui completo
    npx shadcn-ui@latest init
    npx shadcn-ui@latest add button card input label textarea
    npx shadcn-ui@latest add accordion alert badge avatar
    npx shadcn-ui@latest add dialog dropdown-menu tabs
    npx shadcn-ui@latest add separator skeleton tooltip
    
    # Criar estrutura de pastas
    mkdir -p src/components/sections
    mkdir -p src/components/common
    mkdir -p src/components/forms
    mkdir -p src/layouts
    mkdir -p src/utils
    mkdir -p src/content
    mkdir -p public/images
    mkdir -p .copilot/personas
    
    # Configurar Git hooks
    npx husky install
    npx husky add .husky/pre-commit "npx lint-staged"
    
    echo "✅ Projeto Astro + Multi-Persona configurado com sucesso!"
    echo "🎯 Sistema Multi-Persona ativo e pronto para uso!"
  `,
  
  // Multi-Persona Integration
  multiPersonaSetup: {
    personas: [
      "frontend-architect", 
      "seo-specialist", 
      "copywriter", 
      "product-manager", 
      "devops"
    ],
    autoSwitch: true,
    confidenceThreshold: 0.7,
    contextAnalysis: true
  },
  
  // Templates de componentes base
  componentTemplates: {
    heroSection: `
---
interface Props {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary?: string;
}

const { title, subtitle, ctaPrimary, ctaSecondary } = Astro.props;
---

<section class="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
        {title}
      </h1>
      <p class="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
        {subtitle}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
          {ctaPrimary}
        </button>
        {ctaSecondary && (
          <button class="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            {ctaSecondary}
          </button>
        )}
      </div>
    </div>
  </div>
</section>
    `,
    
    baseLayout: `
---
export interface Props {
  title: string;
  description?: string;
  image?: string;
}

const { title, description, image } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    
    <!-- SEO Meta Tags -->
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    <link rel="canonical" href={canonicalURL} />
    
    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={Astro.url} />
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    {image && <meta property="og:image" content={new URL(image, Astro.url)} />}
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={Astro.url} />
    <meta property="twitter:title" content={title} />
    {description && <meta property="twitter:description" content={description} />}
    {image && <meta property="twitter:image" content={new URL(image, Astro.url)} />}
  </head>
  <body class="font-sans antialiased">
    <slot />
  </body>
</html>
    `
  }
};

export default projectStructure;
