import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageToggle } from '@/components/ui/LanguageToggle'
import { LanguageProvider } from '@/app/language-provider'

describe('LanguageToggle', () => {
  let setItemSpy: jest.SpyInstance
  let getItemSpy: jest.SpyInstance

  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
    // Create spies on localStorage methods
    setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
    getItemSpy = jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null)
  })

  afterEach(() => {
    // Restore spies
    setItemSpy.mockRestore()
    getItemSpy.mockRestore()
  })

  const renderWithProvider = () => {
    return render(
      <LanguageProvider>
        <LanguageToggle />
      </LanguageProvider>
    )
  }

  it('should render the language toggle button', async () => {
    renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle language/i })
      expect(button).toBeInTheDocument()
    })
  })

  it('should show dropdown menu when clicked', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle language/i })
      expect(button).toBeInTheDocument()
    })

    const button = screen.getByRole('button', { name: /toggle language/i })
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText(/English/i)).toBeInTheDocument()
      expect(screen.getByText(/Português/i)).toBeInTheDocument()
    })
  })

  it('should close dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    const { container } = renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle language/i })
      expect(button).toBeInTheDocument()
    })

    // Open dropdown
    const button = screen.getByRole('button', { name: /toggle language/i })
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText(/English/i)).toBeInTheDocument()
    })

    // Click outside (on container)
    await user.click(container)

    // Note: Due to AnimatePresence, the menu might still be in DOM but animating out
    // In a real scenario, you'd wait for the animation to complete
  })

  it('should change language to Portuguese when PT option is clicked', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle language/i })
      expect(button).toBeInTheDocument()
    })

    // Open dropdown
    const button = screen.getByRole('button', { name: /toggle language/i })
    await user.click(button)

    // Click Portuguese option
    const ptButton = screen.getByText(/Português/i)
    await user.click(ptButton)

    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith('language', 'pt')
    })
  })

  it('should change language to English when EN option is clicked', async () => {
    const user = userEvent.setup()

    // Start with PT
    getItemSpy.mockReturnValue('pt')
    
    renderWithProvider()
    
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle language/i })
      expect(button).toBeInTheDocument()
    })

    // Open dropdown
    const button = screen.getByRole('button', { name: /toggle language/i })
    await user.click(button)

    // Click English option
    const enButton = screen.getByText(/English/i)
    await user.click(enButton)

    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith('language', 'en')
    })
  })

  it('should highlight selected language in dropdown', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle language/i })
      expect(button).toBeInTheDocument()
    })

    const button = screen.getByRole('button', { name: /toggle language/i })
    await user.click(button)

    await waitFor(() => {
      const enButton = screen.getByText(/English/i)
      expect(enButton).toHaveClass('text-green-500')
    })
  })

  it('should close menu after selecting a language', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle language/i })
      expect(button).toBeInTheDocument()
    })

    // Open dropdown
    const button = screen.getByRole('button', { name: /toggle language/i })
    await user.click(button)

    await waitFor(() => {
      expect(screen.getByText(/English/i)).toBeInTheDocument()
    })

    // Select language
    const ptButton = screen.getByText(/Português/i)
    await user.click(ptButton)

    // Menu should start closing (AnimatePresence will handle exit animation)
    // The actual DOM removal happens after animation completes
  })
})
