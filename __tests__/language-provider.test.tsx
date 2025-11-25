import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageProvider, useLanguage } from '@/app/language-provider'

// Helper component to test useLanguage hook
function TestComponent() {
  const { language, setLanguage } = useLanguage()
  return (
    <div>
      <span data-testid="current-language">{language}</span>
      <button onClick={() => setLanguage('pt')} data-testid="set-pt">
        Set PT
      </button>
      <button onClick={() => setLanguage('en')} data-testid="set-en">
        Set EN
      </button>
    </div>
  )
}

describe('LanguageProvider', () => {
  let setItemSpy: jest.SpyInstance
  let getItemSpy: jest.SpyInstance

  beforeEach(() => {
    // Clear localStorage before each test
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

  it('should render children correctly', () => {
    render(
      <LanguageProvider>
        <div>Test Content</div>
      </LanguageProvider>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should default to English language', async () => {
    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('current-language')).toHaveTextContent('en')
    })
  })

  it('should change language to Portuguese', async () => {
    const user = userEvent.setup()

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    await waitFor(() => {
      expect(screen.getByTestId('current-language')).toHaveTextContent('en')
    })

    await user.click(screen.getByTestId('set-pt'))

    await waitFor(() => {
      expect(screen.getByTestId('current-language')).toHaveTextContent('pt')
    })
  })

  it('should persist language preference in localStorage', async () => {
    const user = userEvent.setup()

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    await user.click(screen.getByTestId('set-pt'))

    await waitFor(() => {
      expect(setItemSpy).toHaveBeenCalledWith('language', 'pt')
    })
  })

  it('should load language from localStorage on mount', async () => {
    // Mock localStorage to return 'pt'
    getItemSpy.mockReturnValue('pt')

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    await waitFor(() => {
      expect(getItemSpy).toHaveBeenCalledWith('language')
      expect(screen.getByTestId('current-language')).toHaveTextContent('pt')
    })
  })

  it('should switch between languages multiple times', async () => {
    const user = userEvent.setup()

    render(
      <LanguageProvider>
        <TestComponent />
      </LanguageProvider>
    )

    // Initial state
    await waitFor(() => {
      expect(screen.getByTestId('current-language')).toHaveTextContent('en')
    })

    // Switch to PT
    await user.click(screen.getByTestId('set-pt'))
    await waitFor(() => {
      expect(screen.getByTestId('current-language')).toHaveTextContent('pt')
    })

    // Switch back to EN
    await user.click(screen.getByTestId('set-en'))
    await waitFor(() => {
      expect(screen.getByTestId('current-language')).toHaveTextContent('en')
    })
  })

  it('should throw error when useLanguage is used outside provider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation()

    expect(() => {
      render(<TestComponent />)
    }).toThrow('useLanguage must be used within a LanguageProvider')

    consoleSpy.mockRestore()
  })
})
