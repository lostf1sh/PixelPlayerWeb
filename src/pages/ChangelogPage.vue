<script setup>
import { ref, onMounted } from 'vue'
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import { fetchWithCache } from '../utils/cache'
import { parseMarkdown } from '../utils/markdown'

const releases = ref([])
const isLoading = ref(true)
const expandedRelease = ref(null)

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

const toggleExpand = (index) => {
  expandedRelease.value = expandedRelease.value === index ? null : index
}

onMounted(async () => {
  try {
    releases.value = await fetchWithCache(
      'https://api.github.com/repos/theovilardo/PixelPlayer/releases?per_page=20',
      'all_releases'
    )
  } catch (error) {
    console.error('Failed to fetch releases:', error)
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="min-h-screen bg-base text-text selection:bg-primary selection:text-base">
    <NavBar />
    
    <main class="pt-20">
      <!-- Header -->
      <div class="bg-mantle py-16 md:py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-text mb-4">Changelog</h1>
          <p class="text-lg text-subtext0 max-w-2xl mx-auto">
            Complete version history of PixelPlayer. See what's new in each release.
          </p>
        </div>
      </div>

      <!-- Releases List -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <!-- Loading State -->
        <div v-if="isLoading" class="space-y-4">
          <div v-for="i in 5" :key="i" class="bg-surface0 rounded-2xl p-6 animate-pulse">
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
          <!-- Timeline line - hidden on mobile -->
          <div class="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue to-pink"></div>

          <!-- Release Items -->
          <div class="space-y-4 md:space-y-6">
            <div 
              v-for="(release, index) in releases" 
              :key="release.id"
              class="relative md:pl-16"
            >
              <!-- Timeline dot - hidden on mobile -->
              <div 
                class="hidden md:block absolute left-4 w-4 h-4 rounded-full border-4 border-base shadow-lg"
                :class="index === 0 ? 'bg-primary shadow-primary/30' : 'bg-surface1'"
              ></div>

              <!-- Release Card - Accordion Style -->
              <div 
                class="bg-surface0 rounded-2xl overflow-hidden transition-all duration-300"
                :class="expandedRelease === index ? 'ring-1 ring-primary/30' : ''"
              >
                <!-- Header - Always Visible, Clickable -->
                <button 
                  @click="toggleExpand(index)"
                  class="w-full p-4 md:p-5 flex items-center justify-between gap-3 hover:bg-surface1/50 transition-colors text-left"
                >
                  <div class="flex flex-wrap items-center gap-2 md:gap-3">
                    <span class="inline-flex items-center px-3 py-1 rounded-full bg-primary/15 text-primary text-sm font-bold">
                      {{ release.tag_name }}
                    </span>
                    <span class="text-base font-semibold text-text">
                      {{ release.name || release.tag_name }}
                    </span>
                    <span v-if="index === 0" class="inline-flex items-center px-2 py-0.5 rounded-full bg-green/15 text-green text-xs font-medium">
                      Latest
                    </span>
                  </div>
                  <div class="flex items-center gap-3 shrink-0">
                    <span class="text-sm text-subtext0 hidden sm:block">
                      {{ formatDate(release.published_at) }}
                    </span>
                    <svg 
                      class="w-5 h-5 text-subtext0 transition-transform duration-300" 
                      :class="expandedRelease === index ? 'rotate-180' : ''"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                  </div>
                </button>

                <!-- Expandable Content -->
                <div 
                  class="overflow-hidden transition-all duration-300"
                  :class="expandedRelease === index ? 'max-h-[5000px]' : 'max-h-0'"
                >
                  <div class="px-4 md:px-5 pb-4 md:pb-5 border-t border-surface1">
                    <!-- Date on mobile -->
                    <p class="text-sm text-subtext0 mt-3 sm:hidden">
                      {{ formatDate(release.published_at) }} ({{ getRelativeTime(release.published_at) }})
                    </p>
                    
                    <!-- Release Notes -->
                    <div class="text-subtext0 text-sm leading-relaxed mt-4">
                      <div v-html="parseMarkdown(release.body || 'No release notes available.')"></div>
                    </div>

                    <!-- Actions -->
                    <div class="mt-5 pt-4 border-t border-surface1 flex flex-wrap gap-3">
                      <a 
                        :href="release.html_url" 
                        target="_blank"
                        class="inline-flex items-center gap-2 text-sm text-subtext0 hover:text-primary transition-colors"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        Download
                      </a>
                      <a 
                        :href="release.html_url" 
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
            </div>
          </div>
        </div>

        <!-- Back to Home -->
        <div class="mt-12 text-center">
          <router-link 
            to="/"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-surface0 hover:bg-surface1 text-text font-medium transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Home
          </router-link>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
