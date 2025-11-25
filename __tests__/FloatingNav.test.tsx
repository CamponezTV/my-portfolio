import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FloatingNav } from '@/components/ui/FloatingNav'
import { LanguageProvider } from '@/app/language-provider'
import { ThemeProvider } from '@/app/theme-provider'

const mockNavItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
]

describe('FloatingNav', () => {
  const renderWithProviders = () => {
    return render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <LanguageProvider>
          <FloatingNav navItems={mockNavItems} />
        </LanguageProvider>
      </ThemeProvider>
    )
  }

  it('should render all navigation items', async () => {
    renderWithProviders()

    await waitFor(() => {
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Projects')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })
  })

  it('should render navigation links with correct hrefs', async () => {
    renderWithProviders()

    await waitFor(() => {
      const aboutLink = screen.getByRole('link', { name: /about/i })
      expect(aboutLink).toHaveAttribute('href', '#about')

      const projectsLink = screen.getByRole('link', { name: /projects/i })
      expect(projectsLink).toHaveAttribute('href', '#projects')
    })
  })

  it('should render language toggle button', async () => {
    renderWithProviders()

    await waitFor(() => {
      const languageButton = screen.getByRole('button', { name: /toggle language/i })
      expect(languageButton).toBeInTheDocument()
    })
  })

  it('should render theme toggle button', async () => {
    renderWithProviders()

    await waitFor(() => {
      const themeButton = screen.getByRole('button', { name: /toggle theme/i })
      expect(themeButton).toBeInTheDocument()
    })
  })

  it('should apply custom className when provided', () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <LanguageProvider>
          <FloatingNav navItems={mockNavItems} className="custom-nav-class" />
        </LanguageProvider>
      </ThemeProvider>
    )

    // The custom class should be applied to the motion.div
    const nav = document.querySelector('.custom-nav-class')
    expect(nav).toBeInTheDocument()
  })

  it('should have fixed positioning', () => {
    renderWithProviders()

    const nav = document.querySelector('.fixed')
    expect(nav).toBeInTheDocument()
  })

  it('should have backdrop blur effect', () => {
    renderWithProviders()

    const nav = document.querySelector('.backdrop-blur-sm')
    expect(nav).toBeInTheDocument()
  })

  it('should render with border and rounded corners', () => {
    renderWithProviders()

    const nav = document.querySelector('.rounded-full')
    expect(nav).toBeInTheDocument()
  })

  it('should contain all navigation items in correct order', async () => {
    renderWithProviders()

    await waitFor(() => {
      const links = screen.getAllByRole('link')
      expect(links[0]).toHaveTextContent('About')
      expect(links[1]).toHaveTextContent('Projects')
      expect(links[2]).toHaveTextContent('Contact')
    })
  })
})
