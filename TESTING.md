# 🧪 Testes Unitários - Portfolio

## 📋 Visão Geral

Este projeto utiliza **Jest** e **React Testing Library** para garantir a qualidade e confiabilidade do código através de testes unitários e de integração.

## 🏗️ Estrutura de Testes

```
my-portfolio/
├── __tests__/                          # Diretório de testes
│   ├── language-provider.test.tsx     # Testes do provider de idioma
│   ├── LanguageToggle.test.tsx        # Testes do toggle de idioma
│   ├── ThemeToggle.test.tsx           # Testes do toggle de tema
│   ├── FloatingNav.test.tsx           # Testes da navegação
│   ├── Hero.test.tsx                  # Testes do componente Hero
│   ├── MagicButton.test.tsx           # Testes do botão customizado
│   ├── translations.test.ts           # Validação das traduções
│   ├── data.test.ts                   # Validação dos dados estáticos
│   └── cn.test.ts                     # Testes da função utility
│
├── jest.config.ts                      # Configuração do Jest
└── jest.setup.ts                       # Setup global dos testes
```

## 🚀 Comandos de Teste

### Executar todos os testes
```bash
npm test
```

### Modo watch (re-executa ao salvar)
```bash
npm run test:watch
```

### Gerar relatório de cobertura
```bash
npm run test:coverage
```

### Executar um teste específico
```bash
npm test language-provider
```

### Modo debug
```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

## 📊 Cobertura de Testes

### Componentes Testados

#### ✅ LanguageProvider (7 testes)
- Renderização correta
- Idioma padrão (Inglês)
- Troca de idiomas
- Persistência no localStorage
- Carregamento da preferência
- Múltiplas trocas
- Erro fora do provider

#### ✅ LanguageToggle (8 testes)
- Renderização do botão
- Exibição do dropdown
- Seleção de idiomas
- Fechamento do menu
- Highlight do idioma selecionado
- Persistência da escolha

#### ✅ ThemeToggle (6 testes)
- Renderização do botão
- Ícones corretos por tema
- Troca de temas
- Chamada do setTheme
- Classes de estilo
- Comportamento SSR

#### ✅ FloatingNav (9 testes)
- Renderização de itens
- Links corretos
- Botões de idioma e tema
- Classes customizadas
- Posicionamento fixo
- Efeito backdrop blur
- Ordem dos itens

#### ✅ Hero (9 testes)
- Renderização geral
- Spotlights
- Conteúdo traduzido
- TextGenerateEffect
- Descrição e CTA
- Link para seção
- Background gradient
- Estilos aplicados

#### ✅ MagicButton (8 testes)
- Renderização com título
- Posição do ícone (left/right)
- Classes customizadas
- Evento de click
- Estilos padrão
- Span animado
- Conteúdo centralizado

#### ✅ Translations (15+ testes)
- Estrutura de idiomas
- Todas as seções presentes
- Propriedades obrigatórias
- Número de itens consistente
- Conteúdo não vazio
- Diferenças entre idiomas
- Validação de campos críticos

#### ✅ Data (20+ testes)
- Estrutura dos arrays
- Propriedades obrigatórias
- IDs únicos e sequenciais
- Validação de URLs
- Paths de imagens
- Integridade de dados
- Strings não vazias

#### ✅ cn utility (13 testes)
- Merge de classes
- Classes condicionais
- Valores undefined/null
- Merge do Tailwind
- Deduplicação
- Variantes responsivas
- Dark mode
- Hover/focus states

## 🎯 Métricas de Qualidade

### Cobertura Esperada
- **Statements:** 80%+
- **Branches:** 75%+
- **Functions:** 80%+
- **Lines:** 80%+

### Áreas Testadas
- ✅ Lógica de negócio
- ✅ Interações do usuário
- ✅ Estado e Context
- ✅ Renderização condicional
- ✅ Props e validações
- ✅ Eventos e callbacks
- ✅ Integração de componentes
- ✅ Utilidades e helpers
- ✅ Integridade de dados
- ✅ Traduções e i18n

## 🛠️ Configuração

### Jest Config (`jest.config.ts`)

```typescript
{
  testEnvironment: 'jsdom',           // Simula browser
  setupFilesAfterEnv: ['jest.setup.ts'], // Setup global
  moduleNameMapper: {                  // Alias de path
    '^@/(.*)$': '<rootDir>/$1'
  },
  collectCoverageFrom: [               // Arquivos para cobertura
    'app/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'locales/**/*.{js,jsx,ts,tsx}',
    'utils/**/*.{js,jsx,ts,tsx}',
  ]
}
```

### Jest Setup (`jest.setup.ts`)

Mocks globais configurados:
- `next-themes` - Mock do ThemeProvider
- `framer-motion` - Mock de animações
- `localStorage` - Mock do storage
- `IntersectionObserver` - Mock do observer

## 📝 Escrevendo Testes

### Exemplo Básico

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MyComponent from '@/components/MyComponent'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })

  it('should handle click', async () => {
    const user = userEvent.setup()
    const handleClick = jest.fn()
    
    render(<MyComponent onClick={handleClick} />)
    
    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })
})
```

### Com Providers

```tsx
import { LanguageProvider } from '@/app/language-provider'

const renderWithProvider = (component: React.ReactNode) => {
  return render(
    <LanguageProvider>
      {component}
    </LanguageProvider>
  )
}

it('should use translations', () => {
  renderWithProvider(<MyComponent />)
  expect(screen.getByText(/English text/i)).toBeInTheDocument()
})
```

### Testando Hooks

```tsx
function TestComponent() {
  const { language, setLanguage } = useLanguage()
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <button onClick={() => setLanguage('pt')}>Change</button>
    </div>
  )
}

it('should change language', async () => {
  const user = userEvent.setup()
  render(
    <LanguageProvider>
      <TestComponent />
    </LanguageProvider>
  )
  
  await user.click(screen.getByRole('button'))
  expect(screen.getByTestId('lang')).toHaveTextContent('pt')
})
```

## 🔍 Queries do Testing Library

### Prioridade de Queries

1. **getByRole** - Mais acessível
2. **getByLabelText** - Bom para formulários
3. **getByPlaceholderText** - Input sem label
4. **getByText** - Conteúdo visível
5. **getByTestId** - Último recurso

### Exemplos

```tsx
// Por role (preferido)
screen.getByRole('button', { name: /submit/i })

// Por texto
screen.getByText(/hello world/i)

// Por test ID
screen.getByTestId('custom-element')

// Queries assíncronas
await screen.findByText(/loading complete/i)

// Verificar ausência
expect(screen.queryByText(/not here/i)).not.toBeInTheDocument()
```

## 🎨 Boas Práticas

### ✅ DO:

1. **Teste comportamento, não implementação**
   ```tsx
   // ✅ Bom
   expect(screen.getByText('Submit')).toBeInTheDocument()
   
   // ❌ Ruim
   expect(component.state.isSubmitting).toBe(true)
   ```

2. **Use user events ao invés de fireEvent**
   ```tsx
   // ✅ Bom
   await user.click(button)
   
   // ❌ Ruim
   fireEvent.click(button)
   ```

3. **Aguarde mudanças assíncronas**
   ```tsx
   // ✅ Bom
   await waitFor(() => {
     expect(screen.getByText('Loaded')).toBeInTheDocument()
   })
   ```

4. **Limpe entre testes**
   ```tsx
   beforeEach(() => {
     localStorage.clear()
     jest.clearAllMocks()
   })
   ```

5. **Use describe para agrupar**
   ```tsx
   describe('MyComponent', () => {
     describe('when logged in', () => {
       // testes relacionados
     })
   })
   ```

### ❌ DON'T:

1. Não teste detalhes de implementação
2. Não use `.only()` ou `.skip()` em commits
3. Não teste bibliotecas externas
4. Não crie testes dependentes entre si
5. Não ignore erros de console no teste

## 🐛 Debugging

### Console.log no teste
```tsx
import { screen, debug } from '@testing-library/react'

it('debug test', () => {
  render(<MyComponent />)
  
  // Mostra o DOM atual
  screen.debug()
  
  // Ou elemento específico
  screen.debug(screen.getByRole('button'))
})
```

### Breakpoints
```tsx
it('with breakpoint', () => {
  render(<MyComponent />)
  
  debugger // Pausar aqui com DevTools aberto
  
  expect(screen.getByText('Test')).toBeInTheDocument()
})
```

### Queries disponíveis
```tsx
screen.logTestingPlaygroundURL()
// Gera URL para Testing Playground
```

## 📈 CI/CD Integration

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test -- --coverage
      - uses: codecov/codecov-action@v3
```

## 🔄 Atualizando Testes

Quando adicionar novos componentes:

1. Crie arquivo `__tests__/ComponentName.test.tsx`
2. Teste casos principais e edge cases
3. Execute `npm run test:coverage`
4. Verifique se cobertura está adequada
5. Commit testes junto com código

## 📚 Recursos

### Documentação
- [Jest](https://jestjs.io/docs/getting-started)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Playground](https://testing-playground.com/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)

### Matchers Úteis

```tsx
// Presença no DOM
expect(element).toBeInTheDocument()
expect(element).not.toBeInTheDocument()

// Visibilidade
expect(element).toBeVisible()
expect(element).not.toBeVisible()

// Conteúdo
expect(element).toHaveTextContent('text')
expect(element).toContainHTML('<span>text</span>')

// Atributos
expect(element).toHaveAttribute('href', '/link')
expect(element).toHaveClass('active')

// Formulários
expect(input).toHaveValue('value')
expect(checkbox).toBeChecked()
expect(button).toBeDisabled()

// Funções
expect(mockFn).toHaveBeenCalled()
expect(mockFn).toHaveBeenCalledTimes(2)
expect(mockFn).toHaveBeenCalledWith('arg')
```

## 🎯 Próximos Passos

- [ ] Adicionar testes E2E com Playwright
- [ ] Configurar Storybook para component testing
- [ ] Implementar visual regression tests
- [ ] Adicionar performance tests
- [ ] Configurar mutation testing

---

**Total de Testes Implementados:** 90+  
**Cobertura Estimada:** 75-85%  
**Mantido por:** Arthur Camponez
