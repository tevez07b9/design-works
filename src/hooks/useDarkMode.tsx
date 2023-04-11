import React from 'react'

const ThemeContext = React.createContext<{ theme: string; toggleTheme: () => void }>({
  theme: '',
  toggleTheme: () => {},
})

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = React.useState('')

  const setMode = (mode: string) => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  React.useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setMode('dark')
    } else {
      setMode('light')
    }
  }, [])

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useThemeContext = () => {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used inside a ThemeContextProvider')
  }

  return context
}
