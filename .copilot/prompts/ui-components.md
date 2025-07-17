# COMPONENTES UI AVANÇADOS

## SHADCN/UI CUSTOMIZADOS
- Tema personalizado com brand colors
- Variantes de componentes
- Composição de componentes complexos
- Animations integradas

## MICRO-INTERACTIONS
- Hover effects sutis
- Loading states elegantes
- Form validations em tempo real
- Scroll-triggered animations

## ACCESSIBILITY
- ARIA labels completos
- Keyboard navigation
- Screen reader optimization
- Color contrast compliance

## DESIGN SYSTEM PRINCIPLES
### Color Psychology
```css
/* Primary: Confiança e autoridade */
--primary: 220 14% 96%;
--primary-foreground: 220 9% 46%;

/* Success: Crescimento e sucesso */
--success: 142 76% 36%;
--success-foreground: 355 7% 97%;

/* Warning: Urgência controlada */
--warning: 32 95% 44%;
--warning-foreground: 220 9% 46%;

/* Destructive: Escassez e ação */
--destructive: 0 84% 60%;
--destructive-foreground: 210 20% 98%;
```

## COMPONENT VARIANTS ESTRATÉGICOS
### Button Variants
- **Primary**: CTAs principais
- **Secondary**: Ações secundárias  
- **Ghost**: Links de navegação
- **Destructive**: Ações críticas
- **Loading**: Estados de carregamento

### Animation Presets
```css
/* Entrada suave */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Hover elegante */
@keyframes scaleHover {
  to { transform: scale(1.02); }
}

/* Loading state */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## RESPONSIVE DESIGN PATTERNS
### Mobile-First Breakpoints
- xs: 475px (large phones)
- sm: 640px (tablets)
- md: 768px (small laptops)
- lg: 1024px (desktops)
- xl: 1280px (large screens)

## CONVERSION-FOCUSED COMPONENTS
### Hero Section Template
- Headline impactante
- Subtitle explicativa
- CTA primário prominente
- CTA secundário sutil
- Social proof visual

### Testimonial Cards
- Photo + name + role
- Star rating visual
- Quote impactante
- Company logo (quando possível)

### FAQ Accordion
- Pergunta como título
- Resposta expandível
- Search functionality
- Categories filter
