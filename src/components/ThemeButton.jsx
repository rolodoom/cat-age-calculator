import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeButton() {
  // Initialize state from localStorage or system preference (NO setState in effect)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false

    const storedTheme = localStorage.getItem('theme')

    if (storedTheme === 'dark') return true
    if (storedTheme === 'light') return false

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Sync DOM + localStorage when state changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {isDark ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </button>
  )
}
