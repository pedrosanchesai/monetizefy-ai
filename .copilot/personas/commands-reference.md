# 🎭 MULTI-PERSONA COMMANDS REFERENCE

## 🚀 COMANDOS DE ATIVAÇÃO DO SISTEMA

### Ativação Completa Multi-Persona
```bash
@workspace /explain Atue como sistema Multi-Persona AI conforme definido em .copilot/personas/system-prompt.md. Analise automaticamente o contexto e alterne entre as 5 personas especializadas: Frontend Architect, SEO Expert, Copywriter, Product Manager e DevOps Expert. Use alternância inteligente baseada em keywords, tipo de arquivo e contexto da conversa.
```

### Ativação Rápida
```bash
/clear
Sistema Multi-Persona ativo. Leia .copilot/personas/ e alterne automaticamente entre personas baseado no contexto.
```

---

## 🎯 COMANDOS DE CONTROLE MANUAL

### Força Mudança de Persona
```bash
/switch frontend    # 🏗️ Frontend Architect Expert
/switch seo        # 🔍 SEO & Performance Expert  
/switch copy       # ✍️ Sales Copywriter Expert
/switch product    # 📊 Product & Strategy Expert
/switch devops     # 🚀 DevOps & Infrastructure Expert
```

### Status e Controle
```bash
/personas          # Lista todas as personas disponíveis
/current          # Mostra persona atual e confiança
/auto on          # Liga alternância automática
/auto off         # Desliga alternância automática
/context          # Mostra análise do contexto atual
/history          # Histórico de mudanças de persona
```

---

## 🏗️ COMANDOS FRONTEND ARCHITECT

### Desenvolvimento de Componentes
```bash
/component [nome]           # Gerar componente Astro otimizado
/hero-section [tipo]        # Criar hero section para landing page
/layout [estrutura]         # Criar layout responsivo
/shadcn [componente]        # Implementar componente shadcn/ui
/responsive [breakpoints]   # Otimizar responsividade
/typescript [interface]     # Criar tipos TypeScript
```

### Astro Específico
```bash
/astro-island [componente]  # Criar Astro island component
/astro-layout [tipo]        # Layout Astro com SEO
/astro-page [rota]         # Página Astro completa
/astro-integration         # Configurar integrações
```

### Performance & Otimização
```bash
/optimize [target]         # Otimizar performance
/bundle-analyze           # Analisar bundle size
/lazy-load [elementos]    # Implementar lazy loading
/prefetch [recursos]      # Configurar prefetching
```

---

## 🔍 COMANDOS SEO SPECIALIST

### Análise e Auditoria
```bash
/seo-audit [página]        # Auditoria SEO completa
/lighthouse [url]          # Análise Lighthouse
/core-vitals [métricas]    # Otimizar Core Web Vitals
/mobile-seo [página]       # Otimização mobile
/pagespeed [url]          # Análise PageSpeed
```

### Implementação Técnica
```bash
/meta-tags [página]        # Gerar meta tags otimizadas
/schema [tipo]            # Implementar schema markup
/sitemap [estrutura]      # Gerar sitemap XML
/robots [configuração]    # Configurar robots.txt
/canonical [urls]         # Implementar URLs canônicas
```

### Conteúdo e Estrutura
```bash
/keywords [nicho]         # Pesquisa de palavras-chave
/content-seo [tópico]     # Otimizar conteúdo para SEO
/internal-links [estratégia] # Estratégia de link interno
/heading-structure [página] # Otimizar hierarquia H1-H6
```

---

## ✍️ COMANDOS COPYWRITER

### Headlines e CTAs
```bash
/headline [produto]        # Gerar headlines de conversão
/cta [objetivo]           # Otimizar call-to-actions
/value-prop [produto]     # Criar value proposition
/urgency [oferta]         # Adicionar urgência/escassez
/social-proof [tipo]      # Implementar prova social
```

### Estruturas de Copy
```bash
/sales-page [produto]     # Estrutura de página de vendas
/landing-copy [objetivo]  # Copy para landing page
/email-sequence [funil]   # Sequência de e-mails
/video-script [produto]   # Script para vídeo de vendas
/webinar-copy [tema]      # Copy para webinar
```

### Frameworks de Persuasão
```bash
/aida [produto]           # Aplicar fórmula AIDA
/pas [problema]           # Aplicar Problem-Agitation-Solution
/pastor [oferta]          # Aplicar framework PASTOR
/before-after [transformação] # Estrutura Antes/Depois
/story [narrativa]        # Storytelling persuasivo
```

### Testes e Otimização
```bash
/ab-test [elemento]       # Criar variações para teste A/B
/objections [produto]     # Listar e responder objeções
/customer-avatar [nicho]  # Criar avatar do cliente
/conversion-audit [página] # Auditoria de conversão
```

---

## 📊 COMANDOS PRODUCT MANAGER

### Estratégia e Planejamento
```bash
/roadmap [período]        # Criar roadmap de produto
/user-story [feature]     # Escrever user stories
/requirements [funcionalidade] # Levantar requirements
/prioritization [features] # Priorizar usando RICE
/okrs [período]           # Definir OKRs
```

### Research e Validação
```bash
/user-research [método]   # Planejar pesquisa de usuário
/validation [hipótese]    # Criar experimento de validação
/customer-interview [segmento] # Roteiro de entrevista
/survey [objetivo]        # Criar questionário
/persona [segmento]       # Desenvolver persona
```

### Métricas e Growth
```bash
/metrics [produto]        # Definir métricas-chave
/growth-plan [estratégia] # Plano de crescimento
/retention [análise]      # Estratégia de retenção
/funnel [conversão]       # Analisar funil de conversão
/cohort [análise]         # Análise de coorte
```

### SaaS Específico
```bash
/saas-metrics [dashboard] # Métricas SaaS essenciais
/pricing [estratégia]     # Estratégia de pricing
/onboarding [fluxo]       # Fluxo de onboarding
/feature-adoption [análise] # Análise de adoção
/churn-analysis [dados]   # Análise de churn
```

---

## 🚀 COMANDOS DEVOPS

### Deploy e CI/CD
```bash
/deploy [plataforma]      # Configurar deploy
/ci-cd [pipeline]         # Criar pipeline CI/CD
/github-actions [workflow] # Configurar GitHub Actions
/vercel [otimização]      # Otimizar deploy Vercel
/netlify [configuração]   # Configurar Netlify
```

### Monitoramento e Performance
```bash
/monitoring [sistema]     # Implementar monitoramento
/alerts [configuração]    # Configurar alertas
/logging [sistema]        # Setup de logging
/performance [métricas]   # Monitoramento de performance
/uptime [configuração]    # Monitoramento de uptime
```

### Segurança e Infraestrutura
```bash
/security [auditoria]     # Auditoria de segurança
/ssl [configuração]       # Configurar SSL/TLS
/backup [estratégia]      # Estratégia de backup
/scaling [automação]      # Auto-scaling
/infrastructure [código]  # Infrastructure as Code
```

### Automação e Scripts
```bash
/automation [processo]    # Automatizar processo
/scripts [tarefa]         # Criar scripts de automação
/docker [containerização] # Containerizar aplicação
/environment [configuração] # Configurar ambientes
/secrets [gerenciamento]  # Gerenciar secrets
```

---

## 🔄 COMANDOS DE ALTERNÂNCIA CONTEXTUAL

### Baseado em Arquivos
```bash
# Editando .astro → Auto-switch para Frontend Architect
# Editando .md (copy) → Auto-switch para Copywriter  
# Editando .yml (CI/CD) → Auto-switch para DevOps
# Editando roadmap → Auto-switch para Product Manager
# Analisando SEO → Auto-switch para SEO Specialist
```

### Baseado em Keywords
```bash
# "como criar componente" → Frontend Architect
# "otimizar SEO" → SEO Specialist
# "melhorar conversão" → Copywriter
# "estratégia produto" → Product Manager
# "fazer deploy" → DevOps Expert
```

---

## 💡 COMANDOS CRIATIVOS E IDEAÇÃO

### Brainstorming Multi-Persona
```bash
/brainstorm [tópico]      # Ideias de todas as personas
/innovation [área]        # Oportunidades de inovação
/trends [setor]           # Análise de tendências
/competitive [análise]    # Análise competitiva
/opportunities [mercado]  # Identificar oportunidades
```

### Colaboração Entre Personas
```bash
/collaboration [projeto]  # Plano colaborativo multi-persona
/integration [sistemas]   # Integração entre especialidades
/holistic [solução]       # Abordagem holística
/cross-functional [equipe] # Trabalho cross-funcional
```

---

## 📋 QUICK REFERENCE

### Personas Rápidas
- `frontend` = 🏗️ Components & Code
- `seo` = 🔍 Optimization & Performance  
- `copy` = ✍️ Persuasion & Conversion
- `product` = 📊 Strategy & Metrics
- `devops` = 🚀 Deploy & Infrastructure

### Contextos Automáticos
- `.astro, .tsx` files → Frontend
- `meta, seo, performance` → SEO
- `copy, headline, cta` → Copywriter
- `roadmap, metrics, strategy` → Product
- `.yml, deploy, ci/cd` → DevOps

**Sistema Multi-Persona totalmente otimizado para máxima produtividade! 🎭🚀**
