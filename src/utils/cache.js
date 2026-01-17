// GitHub API Cache Utility
// Caches GitHub API responses in localStorage with TTL

const CACHE_PREFIX = 'pixelplayer_gh_'
const DEFAULT_TTL = 5 * 60 * 1000 // 5 minutes

export const getCached = (key) => {
  try {
    const item = localStorage.getItem(CACHE_PREFIX + key)
    if (!item) return null
    
    const { data, expiry } = JSON.parse(item)
    if (Date.now() > expiry) {
      localStorage.removeItem(CACHE_PREFIX + key)
      return null
    }
    return data
  } catch {
    return null
  }
}

export const setCache = (key, data, ttl = DEFAULT_TTL) => {
  try {
    const item = {
      data,
      expiry: Date.now() + ttl
    }
    localStorage.setItem(CACHE_PREFIX + key, JSON.stringify(item))
  } catch {
    // localStorage might be full or disabled
  }
}

export const fetchWithCache = async (url, cacheKey, ttl = DEFAULT_TTL) => {
  // Check cache first
  const cached = getCached(cacheKey)
  if (cached) {
    return cached
  }
  
  // Fetch from API
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  
  const data = await response.json()
  setCache(cacheKey, data, ttl)
  return data
}

export const clearCache = () => {
  Object.keys(localStorage)
    .filter(key => key.startsWith(CACHE_PREFIX))
    .forEach(key => localStorage.removeItem(key))
}
