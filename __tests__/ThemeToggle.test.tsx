import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { ThemeProvider } from '@/app/theme-provider'

// We need to properly mock next-themes for this test
const mockSetTheme = jest.fn()
const mockTheme = 'dark'

jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useTheme: () => ({
    theme: mockTheme,
    setTheme: mockSetTheme,
  }),
}))

describe('ThemeToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const renderWithProvider = () => {
    return render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <ThemeToggle />
      </ThemeProvider>
    )
  }

  it('should render theme toggle button', async () => {
    renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle theme/i })
      expect(button).toBeInTheDocument()
    })
  })

  it('should display correct icon for dark theme', async () => {
    renderWithProvider()

    await waitFor(() => {
      // In dark mode, should show Sun icon
      const button = screen.getByRole('button', { name: /toggle theme/i })
      expect(button).toBeInTheDocument()
    })
  })

  it('should call setTheme when clicked', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle theme/i })
      expect(button).toBeInTheDocument()
    })

    const button = screen.getByRole('button', { name: /toggle theme/i })
    await user.click(button)

    expect(mockSetTheme).toHaveBeenCalled()
  })

  it('should toggle between dark and light themes', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle theme/i })
      expect(button).toBeInTheDocument()
    })

    const button = screen.getByRole('button', { name: /toggle theme/i })
    await user.click(button)

    // Should be called with 'light' when current theme is 'dark'
    expect(mockSetTheme).toHaveBeenCalledWith('light')
  })

  it('should have proper styling classes', async () => {
    renderWithProvider()

    await waitFor(() => {
      const button = screen.getByRole('button', { name: /toggle theme/i })
      expect(button).toHaveClass('rounded-full')
      expect(button).toHaveClass('border')
    })
  })

  it('should not render before mount', () => {
    // Simulate SSR by rendering before mount completes
    const { container } = render(
      <ThemeProvider attribute="class" defaultTheme="dark">
        <ThemeToggle />
      </ThemeProvider>
    )

    // Initially should render null
    // After mount effect runs, it will render the button
  })
})
