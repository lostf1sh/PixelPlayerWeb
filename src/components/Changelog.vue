<script setup>
import { ref, onMounted } from 'vue'
import { parseMarkdown } from '../utils/markdown'

const releases = ref([])
const isLoading = ref(true)
const expandedRelease = ref(null)

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString(undefined, {
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

const toggleExpand = (index) => {
  if (expandedRelease.value === index) {
    expandedRelease.value = null
  } else {
    expandedRelease.value = index
  }
}

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/repos/theovilardo/PixelPlayer/releases?per_page=5')
    if (response.ok) {
      releases.value = await response.json()
    }
  } catch (error) {
    console.error('Failed to fetch releases:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="py-20 bg-mantle" id="changelog">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Changelog</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl">
          What's New
        </p>
        <p class="mt-4 text-lg text-subtext0 max-w-2xl mx-auto">
          Stay up to date with the latest features, improvements, and bug fixes.
        </p>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="space-y-4">
        <div v-for="i in 3" :key="i" class="bg-surface0 rounded-2xl p-6 animate-pulse">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-20 h-8 bg-surface1 rounded-full"></div>
            <div class="w-32 h-4 bg-surface1 rounded"></div>
          </div>
          <div class="space-y-2">
            <div class="h-4 bg-surface1 rounded w-3/4"></div>
            <div class="h-4 bg-surface1 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div v-else class="relative">
        <!-- Timeline line -->
        <div class="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue to-pink"></div>

        <!-- Release Items -->
        <div class="space-y-6">
          <div 
            v-for="(release, index) in releases" 
            :key="release.id"
            class="relative pl-16 md:pl-20"
          >
            <!-- Timeline dot -->
            <div class="absolute left-4 md:left-6 w-4 h-4 rounded-full bg-primary border-4 border-mantle shadow-lg shadow-primary/30"></div>

            <!-- Release Card -->
            <div class="bg-surface0 rounded-2xl p-5 md:p-6 hover:bg-surface0/80 transition-colors">
              <!-- Header -->
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <span class="inline-flex items-center px-3 py-1 rounded-full bg-primary/15 text-primary text-sm font-bold">
                  {{ release.tag_name }}
                </span>
                <span class="text-sm text-subtext0">
                  {{ formatDate(release.published_at) }}
                </span>
                <span class="text-xs text-overlay0 hidden sm:inline">
                  ({{ getRelativeTime(release.published_at) }})
                </span>
                <span v-if="index === 0" class="inline-flex items-center px-2 py-0.5 rounded-full bg-green/15 text-green text-xs font-medium">
                  Latest
                </span>
              </div>

              <!-- Release Name -->
              <h3 class="text-lg font-semibold text-text mb-3">
                {{ release.name || release.tag_name }}
              </h3>

              <!-- Release Notes (Truncated) -->
              <div 
                class="text-subtext0 text-sm leading-relaxed overflow-hidden transition-[max-height] duration-300"
                :class="expandedRelease === index ? 'max-h-[2000px]' : 'max-h-24'"
              >
                <div v-html="parseMarkdown(release.body || 'No release notes available.')"></div>
              </div>

              <!-- Expand/Collapse Button -->
              <button 
                v-if="release.body && release.body.length > 150"
                @click="toggleExpand(index)"
                class="mt-3 text-sm text-primary hover:text-lavender font-medium flex items-center gap-1 transition-colors"
              >
                {{ expandedRelease === index ? 'Show less' : 'Show more' }}
                <svg 
                  class="w-4 h-4 transition-transform duration-200" 
                  :class="expandedRelease === index ? 'rotate-180' : ''"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <!-- Download Link -->
              <div class="mt-4 pt-4 border-t border-surface1">
                <a 
                  :href="release.html_url" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 text-sm text-subtext0 hover:text-primary transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download this version
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- View All Link -->
        <div class="mt-8 text-center">
          <a 
            href="https://github.com/theovilardo/PixelPlayer/releases" 
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface0 hover:bg-surface1 text-text font-medium transition-colors"
          >
            View all releases
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
