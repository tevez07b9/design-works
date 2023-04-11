import { useThemeContext } from '@/hooks/useDarkMode'
import React from 'react'

const ThemeModeBtn = () => {
  const { theme, toggleTheme } = useThemeContext()
  return (
    <button
      onClick={() => toggleTheme()}
      className="outline-none px-4 py-2 text-lg rounded-md text-gray-500 bg-gray-300 dark:text-stone-300 dark:bg-stone-800"
    >
      {theme === 'dark' ? `Switch to light` : `Switch to dark`}
    </button>
  )
}

export default ThemeModeBtn
