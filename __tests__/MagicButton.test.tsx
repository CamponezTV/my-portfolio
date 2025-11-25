import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MagicButton from '@/components/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

describe('MagicButton', () => {
  it('should render button with title', () => {
    render(
      <MagicButton 
        title="Click Me" 
        icon={<FaLocationArrow />} 
        position="right" 
      />
    )
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('should render icon on the right when position is right', () => {
    render(
      <MagicButton
        title="Click Me"
        icon={<FaLocationArrow data-testid="icon" />}
        position="right"
      />
    )

    const button = screen.getByRole('button')
    const icon = screen.getByTestId('icon')
    
    expect(button).toContainElement(icon)
  })

  it('should render icon on the left when position is left', () => {
    render(
      <MagicButton
        title="Click Me"
        icon={<FaLocationArrow data-testid="icon" />}
        position="left"
      />
    )

    const button = screen.getByRole('button')
    const icon = screen.getByTestId('icon')
    
    expect(button).toContainElement(icon)
  })

  it('should apply custom classes from otherClasses prop', () => {
    render(
      <MagicButton 
        title="Click Me" 
        icon={<FaLocationArrow />} 
        position="right"
        otherClasses="custom-class" 
      />
    )
    
    const buttonSpan = screen.getByRole('button').querySelector('span.custom-class')
    expect(buttonSpan).toBeInTheDocument()
  })

  it('should call handleClick when clicked', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(
      <MagicButton 
        title="Click Me" 
        icon={<FaLocationArrow />} 
        position="right"
        handleClick={handleClick}
      />
    )
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should render with default styling classes', () => {
    render(
      <MagicButton 
        title="Click Me" 
        icon={<FaLocationArrow />} 
        position="right"
      />
    )
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('relative', 'inline-flex', 'rounded-lg')
  })

  it('should have animated background span', () => {
    const { container } = render(
      <MagicButton 
        title="Click Me" 
        icon={<FaLocationArrow />} 
        position="right"
      />
    )
    
    const animatedSpan = container.querySelector('span.animate-\\[spin_2s_linear_infinite\\]')
    expect(animatedSpan).toBeInTheDocument()
  })

  it('should render title in the center between icons', () => {
    render(
      <MagicButton 
        title="My Button" 
        icon={<FaLocationArrow data-testid="icon" />} 
        position="right"
      />
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('My Button')
  })
})
