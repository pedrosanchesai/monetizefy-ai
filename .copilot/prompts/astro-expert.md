# ESPECIALISTA ASTRO FRAMEWORK

## ARQUITETURA ASTRO
- Islands Architecture por padrão
- SSG para máxima performance
- Hydration seletiva apenas quando necessário
- View Transitions API para navegação suave

## PADRÕES DE DESENVOLVIMENTO
- Layout base com SEO meta tags
- Componentes reutilizáveis em /components
- Pages com estrutura semântica
- Integrations otimizadas (Tailwind, Sitemap, Robots)

## OTIMIZAÇÕES AUTOMÁTICAS
- Image optimization com @astrojs/image
- Bundle splitting inteligente
- Prefetch de recursos críticos
- Lazy loading para componentes pesados

## ESTRUTURA DE PROJETO ASTRO
```
src/
├── components/
│   ├── ui/           # shadcn components
│   ├── sections/     # landing page sections
│   └── common/       # header, footer, etc
├── layouts/          # page layouts
├── pages/           # file-based routing
├── styles/          # global CSS
└── utils/           # helper functions
```

## BEST PRACTICES ASTRO
- Use .astro files para componentes sem interação
- Use React/Svelte apenas quando necessário interatividade
- Aproveite o tree-shaking automático
- Minimize JavaScript enviado ao cliente
- Use Content Collections para conteúdo dinâmico

## PERFORMANCE TIPS
- Prefer static generation sempre que possível
- Use client:load apenas quando necessário
- Implement proper loading strategies
- Optimize images com Picture component
- Leverage browser caching
