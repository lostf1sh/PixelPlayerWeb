<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWithCache } from '../utils/cache'
import { parseMarkdown } from '../utils/markdown'

const router = useRouter()
const latestRelease = ref(null)
const isLoading = ref(true)
const isExpanded = ref(true)

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getRelativeTime = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays} days ago`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
  return `${Math.floor(diffDays / 365)} years ago`
}

const goToChangelog = () => {
  router.push('/changelog')
}

onMounted(async () => {
  try {
    latestRelease.value = await fetchWithCache(
      'https://api.github.com/repos/theovilardo/PixelPlayer/releases/latest',
      'latest_release'
    )
  } catch (error) {
    console.error('Failed to fetch latest release:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="py-16 md:py-20 bg-mantle" id="changelog">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-10">
        <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Latest Release</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl">
          What's New
        </p>
        <p class="mt-4 text-lg text-subtext0 max-w-2xl mx-auto">
          Check out the latest features and improvements.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="bg-surface0 rounded-2xl p-6 animate-pulse">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-24 h-8 bg-surface1 rounded-full"></div>
          <div class="w-32 h-4 bg-surface1 rounded"></div>
        </div>
        <div class="space-y-2">
          <div class="h-4 bg-surface1 rounded w-3/4"></div>
          <div class="h-4 bg-surface1 rounded w-1/2"></div>
        </div>
      </div>

      <!-- Latest Release Card - Accordion Style -->
      <div 
        v-else-if="latestRelease" 
        class="bg-surface0 rounded-2xl overflow-hidden transition-all duration-300"
        :class="isExpanded ? 'ring-1 ring-primary/30' : ''"
      >
        <!-- Header - Always Visible, Clickable -->
        <button 
          @click="isExpanded = !isExpanded"
          class="w-full p-5 md:p-6 flex items-center justify-between gap-3 hover:bg-surface1/50 transition-colors text-left"
        >
          <div class="flex flex-wrap items-center gap-2 md:gap-3">
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/15 text-primary text-base font-bold">
              {{ latestRelease.tag_name }}
            </span>
            <span class="text-lg md:text-xl font-bold text-text">
              {{ latestRelease.name || latestRelease.tag_name }}
            </span>
            <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-green/15 text-green text-xs font-medium">
              Latest
            </span>
          </div>
          <div class="flex items-center gap-3 shrink-0">
            <span class="text-sm text-subtext0 hidden sm:block">
              {{ formatDate(latestRelease.published_at) }}
            </span>
            <svg 
              class="w-5 h-5 text-subtext0 transition-transform duration-300" 
              :class="isExpanded ? 'rotate-180' : ''"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </div>
        </button>

        <!-- Quick Actions - Always Visible -->
        <div class="px-5 md:px-6 pb-4 flex flex-wrap gap-3">
          <a 
            :href="latestRelease.html_url" 
            target="_blank"
            class="inline-flex items-center gap-2 text-sm text-subtext0 hover:text-primary transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download
          </a>
          <a 
            :href="latestRelease.html_url" 
            target="_blank"
            class="inline-flex items-center gap-2 text-sm text-subtext0 hover:text-primary transition-colors"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>

        <!-- Expandable Content -->
        <div 
          class="overflow-hidden transition-all duration-300"
          :class="isExpanded ? 'max-h-[3000px]' : 'max-h-0'"
        >
          <div class="px-5 md:px-6 pb-5 md:pb-6 border-t border-surface1">
            <!-- Date on mobile -->
            <p class="text-sm text-subtext0 mt-3 sm:hidden">
              {{ formatDate(latestRelease.published_at) }} ({{ getRelativeTime(latestRelease.published_at) }})
            </p>
            
            <!-- Release Notes -->
            <div class="text-subtext0 text-sm md:text-base leading-relaxed mt-4">
              <div v-html="parseMarkdown(latestRelease.body || 'No release notes available.')"></div>
            </div>

            <!-- Actions -->
            <div class="mt-5 pt-4 border-t border-surface1 flex flex-wrap gap-3">
              <a 
                :href="latestRelease.html_url" 
                target="_blank"
                class="inline-flex items-center gap-2 text-sm text-subtext0 hover:text-primary transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                Download
              </a>
              <a 
                :href="latestRelease.html_url" 
                target="_blank"
                class="inline-flex items-center gap-2 text-sm text-subtext0 hover:text-primary transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else class="bg-surface0 rounded-2xl p-8 text-center">
        <p class="text-subtext0">Unable to load release information.</p>
        <button 
          @click="goToChangelog"
          class="mt-4 inline-flex items-center gap-2 text-primary hover:text-lavender font-medium transition-colors"
        >
          View changelog on GitHub
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
