import { ref, watch } from 'vue'

const isDark = ref(true)

const getSystemTheme = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  return true
}

const getSavedTheme = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme')
    if (saved) {
      return saved === 'dark'
    }
  }
  return null
}

const applyTheme = (dark) => {
  if (typeof document !== 'undefined') {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

export function useTheme() {
  const initTheme = () => {
    const saved = getSavedTheme()
    isDark.value = saved !== null ? saved : getSystemTheme()
    applyTheme(isDark.value)
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme(isDark.value)
  }

  const setTheme = (dark) => {
    isDark.value = dark
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    applyTheme(isDark.value)
  }

  return {
    isDark,
    toggleTheme,
    setTheme,
    initTheme
  }
}
