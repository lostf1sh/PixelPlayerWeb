<script setup>
import { ref, onMounted } from 'vue'
import { fetchWithCache } from '../utils/cache'

const stats = ref({
  stars: 0,
  forks: 0,
  downloads: 0,
  contributors: 0
})

const displayStats = ref({
  stars: 0,
  forks: 0,
  downloads: 0,
  contributors: 0
})

const isLoading = ref(true)

const animateValue = (key, target, duration = 1500) => {
  const start = 0
  const startTime = performance.now()
  
  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    displayStats.value[key] = Math.floor(easeOutQuart * target)
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      displayStats.value[key] = target
    }
  }
  
  requestAnimationFrame(animate)
}

const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

onMounted(async () => {
  try {
    // Fetch with cache (5 min TTL)
    const [repoData, releases, contributors] = await Promise.all([
      fetchWithCache('https://api.github.com/repos/theovilardo/PixelPlayer', 'repo'),
      fetchWithCache('https://api.github.com/repos/theovilardo/PixelPlayer/releases', 'releases'),
      fetchWithCache('https://api.github.com/repos/theovilardo/PixelPlayer/contributors?per_page=100', 'contributors')
    ])

    stats.value.stars = repoData.stargazers_count || 0
    stats.value.forks = repoData.forks_count || 0

    let totalDownloads = 0
    releases.forEach(release => {
      release.assets?.forEach(asset => {
        totalDownloads += asset.download_count || 0
      })
    })
    stats.value.downloads = totalDownloads

    stats.value.contributors = Array.isArray(contributors) ? contributors.length : 0

    isLoading.value = false

    // Animate all values
    setTimeout(() => {
      Object.keys(stats.value).forEach((key, index) => {
        setTimeout(() => {
          animateValue(key, stats.value[key])
        }, index * 100)
      })
    }, 200)

  } catch (error) {
    console.error('Failed to fetch GitHub stats:', error)
    isLoading.value = false
  }
})

</script>

<template>
  <div class="py-12 bg-mantle border-y border-surface0/30">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <!-- Stars -->
        <div class="group relative bg-surface0/50 rounded-2xl p-5 text-center hover:bg-surface0 transition-all duration-300 hover:-translate-y-1">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative">
            <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-yellow/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-text mb-1">
              <span v-if="isLoading" class="inline-block w-12 h-8 bg-surface1 rounded animate-pulse"></span>
              <span v-else>{{ formatNumber(displayStats.stars) }}</span>
            </div>
            <div class="text-sm text-subtext0 font-medium">Stars</div>
          </div>
        </div>

        <!-- Forks -->
        <div class="group relative bg-surface0/50 rounded-2xl p-5 text-center hover:bg-surface0 transition-all duration-300 hover:-translate-y-1">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative">
            <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 006 0V6a3 3 0 00-3-3zm12 0a3 3 0 00-3 3v2.25a3 3 0 006 0V6a3 3 0 00-3-3zM6 20.25a3 3 0 003-3V15h6v2.25a3 3 0 006 0V15a2.25 2.25 0 00-2.25-2.25h-13.5A2.25 2.25 0 003 15v2.25a3 3 0 003 3z"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-text mb-1">
              <span v-if="isLoading" class="inline-block w-12 h-8 bg-surface1 rounded animate-pulse"></span>
              <span v-else>{{ formatNumber(displayStats.forks) }}</span>
            </div>
            <div class="text-sm text-subtext0 font-medium">Forks</div>
          </div>
        </div>

        <!-- Downloads -->
        <div class="group relative bg-surface0/50 rounded-2xl p-5 text-center hover:bg-surface0 transition-all duration-300 hover:-translate-y-1">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative">
            <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-green/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-text mb-1">
              <span v-if="isLoading" class="inline-block w-12 h-8 bg-surface1 rounded animate-pulse"></span>
              <span v-else>{{ formatNumber(displayStats.downloads) }}</span>
            </div>
            <div class="text-sm text-subtext0 font-medium">Downloads</div>
          </div>
        </div>

        <!-- Contributors -->
        <div class="group relative bg-surface0/50 rounded-2xl p-5 text-center hover:bg-surface0 transition-all duration-300 hover:-translate-y-1">
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative">
            <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-pink/10 flex items-center justify-center">
              <svg class="w-6 h-6 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m9 5.197v1"/>
              </svg>
            </div>
            <div class="text-3xl font-bold text-text mb-1">
              <span v-if="isLoading" class="inline-block w-12 h-8 bg-surface1 rounded animate-pulse"></span>
              <span v-else>{{ formatNumber(displayStats.contributors) }}</span>
            </div>
            <div class="text-sm text-subtext0 font-medium">Contributors</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
