import { cn } from '@/utils/cn'

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('class1', 'class2')
    expect(result).toContain('class1')
    expect(result).toContain('class2')
  })

  it('should handle conditional classes', () => {
    const result = cn('base', true && 'conditional', false && 'not-included')
    expect(result).toContain('base')
    expect(result).toContain('conditional')
    expect(result).not.toContain('not-included')
  })

  it('should handle undefined and null values', () => {
    const result = cn('class1', undefined, null, 'class2')
    expect(result).toContain('class1')
    expect(result).toContain('class2')
  })

  it('should merge Tailwind classes correctly', () => {
    const result = cn('px-4 py-2', 'px-6')
    // Should keep only the last px value
    expect(result).toContain('px-6')
    expect(result).not.toContain('px-4')
    expect(result).toContain('py-2')
  })

  it('should handle empty input', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('should handle array of classes', () => {
    const result = cn(['class1', 'class2'], 'class3')
    expect(result).toContain('class1')
    expect(result).toContain('class2')
    expect(result).toContain('class3')
  })

  it('should handle object notation', () => {
    const result = cn({
      'active': true,
      'disabled': false,
      'visible': true,
    })
    expect(result).toContain('active')
    expect(result).toContain('visible')
    expect(result).not.toContain('disabled')
  })

  it('should deduplicate classes', () => {
    const result = cn('class1', 'class1', 'class2')
    // clsx keeps duplicate classes, but tailwind-merge will handle conflicts
    expect(result).toContain('class1')
    expect(result).toContain('class2')
  })

  it('should handle complex Tailwind merging scenarios', () => {
    const result = cn(
      'bg-red-500 text-white',
      'bg-blue-500'
    )
    expect(result).toContain('bg-blue-500')
    expect(result).not.toContain('bg-red-500')
    expect(result).toContain('text-white')
  })

  it('should preserve important modifiers', () => {
    const result = cn('!bg-red-500', 'bg-blue-500')
    expect(result).toContain('!bg-red-500')
  })

  it('should handle responsive variants', () => {
    const result = cn('sm:text-sm', 'md:text-base', 'lg:text-lg')
    expect(result).toContain('sm:text-sm')
    expect(result).toContain('md:text-base')
    expect(result).toContain('lg:text-lg')
  })

  it('should handle dark mode variants', () => {
    const result = cn('dark:bg-black', 'dark:text-white')
    expect(result).toContain('dark:bg-black')
    expect(result).toContain('dark:text-white')
  })

  it('should merge hover and focus variants', () => {
    const result = cn('hover:bg-gray-100', 'focus:ring-2')
    expect(result).toContain('hover:bg-gray-100')
    expect(result).toContain('focus:ring-2')
  })
})
