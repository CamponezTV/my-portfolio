# 🚀 Portfolio Arthur Camponez

Portfolio pessoal desenvolvido com Next.js 14, TypeScript, Tailwind CSS e Framer Motion, apresentando projetos, experiências profissionais e habilidades como desenvolvedor UX/UI Front End.

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológica](#-stack-tecnológica)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Documentação](#-documentação)
- [Componentes Principais](#-componentes-principais)
- [Internacionalização](#-internacionalização)
- [Deploy](#-deploy)

## ✨ Funcionalidades

### 🌍 Internacionalização (i18n)
- Suporte completo para **Inglês** (padrão) e **Português**
- Troca de idioma instantânea sem reload da página
- Persistência de preferência no localStorage
- Todas as seções traduzidas dinamicamente

### 🎨 Design e UX
- **Dark/Light Mode** com transições suaves
- Animações sofisticadas com Framer Motion
- Design responsivo para todos os dispositivos
- Efeitos visuais 3D com Three.js e React Three Fiber
- Componentes interativos e microanimações

### 📱 Seções
1. **Hero** - Apresentação com animação de texto digitando
2. **About** - Bento Grid com informações pessoais e habilidades
3. **Projects** - Showcase de projetos com efeito 3D Pin
4. **Testimonials** - Depoimentos em carrossel infinito
5. **Experience** - Timeline de experiências profissionais
6. **Approach** - Características e valores profissionais
7. **Footer** - Contato e redes sociais

### 🎯 Recursos Técnicos
- Server-Side Rendering (SSR) com Next.js 14
- TypeScript para type safety
- Component-driven architecture
- Tailwind CSS para estilização
- Custom hooks e Context API
- Otimização de performance

## 🛠️ Stack Tecnológica

### Core
- **[Next.js 14](https://nextjs.org)** - Framework React com App Router
- **[React 18](https://react.dev)** - Biblioteca UI
- **[TypeScript](https://www.typescriptlang.org)** - Superset JavaScript tipado
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first

### Animações e Efeitos
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca de animações
- **[Three.js](https://threejs.org)** - Biblioteca 3D
- **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer para Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Helpers para React Three Fiber

### UI e Ícones
- **[Lucide React](https://lucide.dev)** - Ícones modernos
- **[React Icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones
- **[React Lottie](https://www.npmjs.com/package/react-lottie)** - Animações Lottie

### Utilitários
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento de temas
- **[clsx](https://github.com/lukeed/clsx)** - Utility para className
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge de classes Tailwind
- **[mini-svg-data-uri](https://github.com/tigt/mini-svg-data-uri)** - Otimização de SVG

## 📁 Estrutura do Projeto

```
my-portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout principal com providers
│   ├── page.tsx                 # Página home (client component)
│   ├── globals.css              # Estilos globais e variáveis CSS
│   ├── theme-provider.tsx       # Provider para dark/light mode
│   └── language-provider.tsx    # Provider para i18n
│
├── components/                   # Componentes React
│   ├── Hero.tsx                 # Seção hero com apresentação
│   ├── Grid.tsx                 # Bento grid de informações
│   ├── RecentProjects.tsx       # Showcase de projetos
│   ├── Clients.tsx              # Depoimentos e clientes
│   ├── Experience.tsx           # Timeline de experiências
│   ├── Approach.tsx             # Características profissionais
│   ├── Footer.tsx               # Footer com contato
│   ├── MagicButton.tsx          # Botão customizado com efeitos
│   │
│   └── ui/                      # Componentes UI reutilizáveis
│       ├── 3d-pin.tsx           # Efeito 3D para cards
│       ├── BentoGrid.tsx        # Grid layout
│       ├── CanvasRevealEffect.tsx # Efeito canvas reveal
│       ├── FloatingNav.tsx      # Navegação flutuante
│       ├── Globe.tsx            # Globo 3D interativo
│       ├── GradientBg.tsx       # Background com gradiente
│       ├── GridGlobe.tsx        # Grid com globo
│       ├── InfiniteMovingCards.tsx # Carrossel infinito
│       ├── LanguageToggle.tsx   # Toggle de idiomas
│       ├── Moving.Borders.tsx   # Bordas animadas
│       ├── Spotlight.tsx        # Efeito spotlight
│       ├── TextGenerateEffect.tsx # Animação de texto
│       └── ThemeToggle.tsx      # Toggle dark/light mode
│
├── data/                        # Dados estáticos
│   ├── index.ts                # Dados de projetos, experiências, etc
│   ├── confetti.json           # Animação confetti
│   └── globe.json              # Dados do globo 3D
│
├── locales/                     # Internacionalização
│   └── translations.ts         # Traduções EN/PT
│
├── public/                      # Assets estáticos
│   ├── *.svg                   # Ícones e logos
│   ├── *.png                   # Imagens
│   └── ...
│
├── utils/                       # Utilitários
│   └── cn.ts                   # Helper para merge de classes
│
├── next.config.mjs             # Configuração Next.js
├── tailwind.config.ts          # Configuração Tailwind
├── tsconfig.json               # Configuração TypeScript
├── postcss.config.mjs          # Configuração PostCSS
├── package.json                # Dependências e scripts
│
└── Documentação/
    ├── README.md               # Este arquivo
    ├── I18N_README.md         # Documentação i18n
    └── IMPROVEMENTS.md        # Análise e melhorias

```

## 🚀 Instalação

### Pré-requisitos
- **Node.js** 18+ 
- **npm** ou **yarn** ou **pnpm**

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/CamponezTV/my-portfolio.git
cd my-portfolio
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Abra no navegador**
```
http://localhost:3000
```

## 📜 Scripts Disponíveis

```json
{
  "dev": "next dev",              // Inicia servidor de desenvolvimento
  "build": "next build",           // Build para produção
  "start": "next start",           // Inicia servidor de produção
  "lint": "next lint"              // Executa ESLint
}
```

### Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Testar build localmente
npm run build && npm run start

# Linting
npm run lint

# Análise de bundle (requer configuração)
npm run analyze
```

## 📚 Documentação

### Arquivos de Documentação

- **[I18N_README.md](./I18N_README.md)** - Guia completo do sistema de internacionalização
  - Como usar traduções
  - Como adicionar novos idiomas
  - Estrutura de traduções
  - Exemplos de código

- **[IMPROVEMENTS.md](./IMPROVEMENTS.md)** - Análise detalhada e roadmap
  - Problemas identificados
  - Soluções recomendadas
  - Melhorias de segurança
  - Otimizações de performance
  - Boas práticas

## 🧩 Componentes Principais

### Hero
Seção de apresentação com animação de texto digitando.

```tsx
// components/Hero.tsx
- Usa useLanguage() para traduções
- TextGenerateEffect para animação de texto
- Spotlights para efeitos visuais
- MagicButton para CTA
```

**Features:**
- Animação de texto com efeito typing
- Efeitos de spotlight coloridos
- Gradiente animado de fundo
- Responsivo

### FloatingNav
Barra de navegação flutuante que aparece ao fazer scroll.

```tsx
// components/ui/FloatingNav.tsx
- Aparece/desaparece baseado no scroll
- Inclui LanguageToggle e ThemeToggle
- Animações com Framer Motion
- Links de navegação suave
```

**Features:**
- Auto-hide/show no scroll
- Backdrop blur effect
- Botões de idioma e tema integrados
- Mobile responsive

### Grid (About)
Bento Grid com informações sobre habilidades e background.

```tsx
// components/Grid.tsx
- Usa BentoGrid e BentoGridItem
- Layout responsivo com Tailwind
- Dynamic import para otimização
- Tradução dinâmica de conteúdo
```

**Features:**
- Layout grid assimétrico
- Cards interativos
- Globo 3D interativo
- Tech stack animado

### RecentProjects
Showcase de projetos com efeito 3D Pin.

```tsx
// components/RecentProjects.tsx
- 3D Pin effect para cards
- Grid responsivo de projetos
- Links externos
- Ícones de tecnologias
```

**Features:**
- Efeito 3D nos cards
- Hover animations
- Links para projetos ao vivo
- Stack de tecnologias visual

### Experience
Timeline de experiências profissionais.

```tsx
// components/Experience.tsx
- Cards com bordas animadas
- Grid layout responsivo
- Gradientes customizados
- Imagens de empresas
```

**Features:**
- Cards com moving borders
- Gradient backgrounds
- Timeline visual
- Informações detalhadas

### Approach
Seções com características profissionais e Canvas Reveal Effect.

```tsx
// components/Approach.tsx
- Canvas animations
- Cards expansíveis
- Cores customizadas por card
- Descrições detalhadas
```

**Features:**
- Canvas reveal animations
- Hover interactions
- Multi-color themes
- Responsive cards

## 🌍 Internacionalização

### Sistema i18n Customizado

O projeto usa um sistema de i18n customizado baseado em React Context.

#### Estrutura

```typescript
// app/language-provider.tsx
- Context Provider para idioma
- Persistência em localStorage
- Type-safe com TypeScript

// locales/translations.ts
- Objeto com todas as traduções
- Estrutura hierárquica
- Fácil manutenção

// components/ui/LanguageToggle.tsx
- Dropdown com bandeiras
- Animações suaves
- Visual feedback
```

#### Como Usar

```tsx
import { useLanguage } from '@/app/language-provider';
import { translations } from '@/locales/translations';

export function MyComponent() {
  const { language } = useLanguage();
  const t = translations[language];

  return <h1>{t.section.title}</h1>;
}
```

#### Adicionar Tradução

```typescript
// locales/translations.ts
export const translations = {
  en: {
    newSection: {
      title: "English Title",
    },
  },
  pt: {
    newSection: {
      title: "Título em Português",
    },
  },
};
```

**Leia mais:** [I18N_README.md](./I18N_README.md)

## 🎨 Temas (Dark/Light Mode)

### Implementação

```tsx
// app/theme-provider.tsx
- Usa next-themes
- Persistência automática
- Sem flash no carregamento

// components/ui/ThemeToggle.tsx
- Botão com ícones (Sol/Lua)
- Animação de rotação
- Feedback visual
```

### Uso

```tsx
import { useTheme } from 'next-themes';

export function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="dark:bg-black bg-white">
      {/* Conteúdo */}
    </div>
  );
}
```

### Variáveis CSS

```css
/* app/globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  /* ... */
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  /* ... */
}
```

## 🎭 Animações

### Framer Motion

Principais padrões de animação usados:

```tsx
// Fade in on scroll
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
/>

// Hover scale
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>

// Stagger children
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
/>
```

### Canvas Reveal Effect

Efeito customizado com HTML Canvas:

```tsx
<CanvasRevealEffect
  animationSpeed={3}
  containerClassName="bg-emerald-900"
  colors={[[125, 211, 252]]}
  dotSize={2}
/>
```

## 🔧 Configuração

### Tailwind CSS

```typescript
// tailwind.config.ts
- Cores customizadas
- Animações personalizadas
- Plugins (bg-grid, spotlight)
- Variáveis CSS integradas
```

### Next.js

```javascript
// next.config.mjs
- Otimizações de imagem
- SVG data URI
- Configurações de build
```

### TypeScript

```json
// tsconfig.json
- Strict mode habilitado
- Path aliases (@/*)
- Next.js configuration
```

## 📊 Performance

### Otimizações Implementadas

- ✅ Dynamic imports para componentes pesados
- ✅ Lazy loading de imagens
- ✅ Code splitting automático (Next.js)
- ✅ CSS-in-JS com Tailwind (atomic CSS)
- ✅ Framer Motion optimized animations
- ✅ React.memo em componentes quando necessário

### Otimizações Futuras

- [ ] Next.js Image para todas as imagens
- [ ] Service Worker para cache
- [ ] Preload de recursos críticos
- [ ] Compressão de assets
- [ ] Bundle analysis e tree shaking

## 🔒 Segurança

### Implementado

- ✅ TypeScript para type safety
- ✅ ESLint para código limpo
- ✅ Sanitização de dados em componentes
- ✅ HTTPS (automático no Vercel)

### Recomendado

- [ ] Content Security Policy (CSP)
- [ ] Rate limiting em formulários
- [ ] Validação de inputs
- [ ] Environment variables seguras

**Leia mais:** [IMPROVEMENTS.md](./IMPROVEMENTS.md)

## 🚀 Deploy

### Vercel (Recomendado)

1. **Push para GitHub**
```bash
git add .
git commit -m "Deploy"
git push origin main
```

2. **Conecte no Vercel**
   - Acesse [vercel.com](https://vercel.com)
   - Importe o repositório
   - Deploy automático!

3. **Configurações**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Outras Plataformas

- **Netlify:** Suporta Next.js com plugin
- **Railway:** Deploy com Docker
- **AWS Amplify:** Suporte nativo Next.js

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de uso pessoal. © 2024 Arthur Camponez

## 👤 Autor

**Arthur Camponez**
- Portfolio: [Em breve]
- LinkedIn: [linkedin.com/in/arthur-camponez](https://linkedin.com/in/arthur-camponez)
- GitHub: [@CamponezTV](https://github.com/CamponezTV)
- Email: arthurcamponez2020@gmail.com

## 🙏 Agradecimentos

- Next.js team pelo framework incrível
- Vercel pela hospedagem
- Aceternity UI pela inspiração de componentes
- Comunidade open source

---

**Desenvolvido com ❤️ usando Next.js e TypeScript**
