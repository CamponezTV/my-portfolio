import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import { LanguageProvider } from '@/app/language-provider'

// Mock the Spotlight component
jest.mock('@/components/ui/Spotlight', () => ({
  Spotlight: ({ className, fill }: any) => (
    <div data-testid={`spotlight-${fill}`} className={className} />
  ),
}))

// Mock TextGenerateEffect
jest.mock('@/components/ui/TextGenerateEffect', () => ({
  TextGenerateEffect: ({ words, className }: any) => (
    <div data-testid="text-generate" className={className}>
      {words}
    </div>
  ),
}))

// Mock MagicButton
jest.mock('@/components/MagicButton', () => ({
  __esModule: true,
  default: ({ title, icon }: any) => (
    <button data-testid="magic-button">
      {title}
      {icon}
    </button>
  ),
}))

describe('Hero Component', () => {
  const renderWithProvider = () => {
    return render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    )
  }

  it('should render hero component', () => {
    renderWithProvider()
    expect(screen.getByTestId('text-generate')).toBeInTheDocument()
  })

  it('should render all spotlights', () => {
    renderWithProvider()
    expect(screen.getByTestId('spotlight-green')).toBeInTheDocument()
    expect(screen.getByTestId('spotlight-blue')).toBeInTheDocument()
    expect(screen.getByTestId('spotlight-white')).toBeInTheDocument()
  })

  it('should render subtitle in English by default', () => {
    renderWithProvider()
    expect(screen.getByText(/Making my ideas come to life/i)).toBeInTheDocument()
  })

  it('should render title with TextGenerateEffect', () => {
    renderWithProvider()
    const textGenerate = screen.getByTestId('text-generate')
    expect(textGenerate).toBeInTheDocument()
    expect(textGenerate).toHaveTextContent(/Hi, I'm Arthur/i)
  })

  it('should render description', () => {
    renderWithProvider()
    expect(screen.getByText(/Currently Devouring Next.js/i)).toBeInTheDocument()
  })

  it('should render CTA button', () => {
    renderWithProvider()
    const button = screen.getByTestId('magic-button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/My Work/i)
  })

  it('should have link to about section', () => {
    renderWithProvider()
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '#about')
  })

  it('should render gradient background', () => {
    const { container } = renderWithProvider()
    const gradient = container.querySelector('[class*="mask-image"]')
    expect(gradient).toBeInTheDocument()
  })

  it('should apply correct styling classes', () => {
    const { container } = renderWithProvider()
    const heroContainer = container.querySelector('.pb-20')
    expect(heroContainer).toBeInTheDocument()
  })
})
