import '@testing-library/jest-dom'

// Mock next-themes
jest.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
  useTheme: () => ({
    theme: 'dark',
    setTheme: jest.fn(),
  }),
}))

// Mock framer-motion
jest.mock('framer-motion', () => {
  const React = require('react')
  return {
    motion: {
      div: React.forwardRef((props: any, ref: any) => React.createElement('div', { ...props, ref })),
      button: React.forwardRef((props: any, ref: any) => React.createElement('button', { ...props, ref })),
      span: React.forwardRef((props: any, ref: any) => React.createElement('span', { ...props, ref })),
      h1: React.forwardRef((props: any, ref: any) => React.createElement('h1', { ...props, ref })),
      p: React.forwardRef((props: any, ref: any) => React.createElement('p', { ...props, ref })),
    },
    AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
    useScroll: () => ({
      scrollYProgress: { get: () => 0, getPrevious: () => 0 },
    }),
    useMotionValueEvent: jest.fn(),
    useAnimate: () => [{ current: null }, jest.fn()],
    stagger: jest.fn(),
  }
})

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = localStorageMock as any

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return []
  }
  unobserve() {}
} as any
