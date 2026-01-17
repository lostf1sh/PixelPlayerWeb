<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { fetchWithCache } from '../utils/cache'

const router = useRouter()
const latestRelease = ref(null)
const isLoading = ref(true)
const isExpanded = ref(false)

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

const parseMarkdown = (text) => {
  if (!text) return ''
  
  return text
    .replace(/^### (.*$)/gim, '<h4 class="text-base font-semibold text-text mt-3 mb-1">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 class="text-lg font-semibold text-text mt-4 mb-2">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-text">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-surface1 rounded text-sm text-primary">$1</code>')
    .replace(/^\* (.*$)/gim, '<li class="ml-4 text-subtext0">• $1</li>')
    .replace(/^- (.*$)/gim, '<li class="ml-4 text-subtext0">• $1</li>')
    .replace(/\n\n/g, '</p><p class="mt-2">')
    .replace(/\n/g, '<br>')
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

      <!-- Latest Release Card -->
      <div v-else-if="latestRelease" class="bg-surface0 rounded-2xl p-5 md:p-8">
        <!-- Header -->
        <div class="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
          <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/15 text-primary text-base font-bold">
            {{ latestRelease.tag_name }}
          </span>
          <span class="text-sm text-subtext0">
            {{ formatDate(latestRelease.published_at) }}
          </span>
          <span class="text-xs text-overlay0 hidden sm:inline">
            ({{ getRelativeTime(latestRelease.published_at) }})
          </span>
          <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-green/15 text-green text-xs font-medium">
            Latest
          </span>
        </div>

        <!-- Release Name -->
        <h3 class="text-xl md:text-2xl font-bold text-text mb-4">
          {{ latestRelease.name || latestRelease.tag_name }}
        </h3>

        <!-- Release Notes -->
        <div 
          class="text-subtext0 text-sm md:text-base leading-relaxed overflow-hidden transition-all duration-300"
          :class="isExpanded ? 'max-h-[3000px]' : 'max-h-64'"
        >
          <div v-html="parseMarkdown(latestRelease.body || 'No release notes available.')"></div>
        </div>

        <button 
          v-if="latestRelease.body && latestRelease.body.length > 150"
          @click="isExpanded = !isExpanded"
          class="mt-4 text-sm text-primary hover:text-lavender font-medium flex items-center gap-1 transition-colors"
        >
          {{ isExpanded ? 'Show less' : 'Show more' }}
          <svg 
            class="w-4 h-4 transition-transform duration-200" 
            :class="isExpanded ? 'rotate-180' : ''"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>

        <!-- Actions -->
        <div class="mt-6 pt-6 border-t border-surface1 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <a 
            :href="latestRelease.html_url" 
            target="_blank"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-crust font-semibold hover:bg-lavender transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            Download {{ latestRelease.tag_name }}
          </a>
          
          <button 
            @click="goToChangelog"
            class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-surface1 text-text font-medium hover:bg-surface2 transition-colors"
          >
            View all versions
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
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
