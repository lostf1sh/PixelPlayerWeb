<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const screenshots = [
  { src: new URL('@/assets/screenshots/home.jpg', import.meta.url).href, alt: 'Home Screen', title: 'Home' },
  { src: new URL('@/assets/screenshots/player.jpg', import.meta.url).href, alt: 'Now Playing', title: 'Player' },
  { src: new URL('@/assets/screenshots/library.jpg', import.meta.url).href, alt: 'Library', title: 'Library' },
  { src: new URL('@/assets/screenshots/album.jpg', import.meta.url).href, alt: 'Album View', title: 'Album' },
  { src: new URL('@/assets/screenshots/equalizer.jpg', import.meta.url).href, alt: 'Equalizer', title: 'Equalizer' }
]

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const openLightbox = (index) => {
  lightboxIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  lightboxIndex.value = (lightboxIndex.value + 1) % screenshots.length
}

const prevImage = () => {
  lightboxIndex.value = (lightboxIndex.value - 1 + screenshots.length) % screenshots.length
}

// Keyboard navigation
const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="py-20 bg-base relative overflow-hidden" id="screenshots">
    <!-- Subtle background decorations -->
    <div class="absolute top-1/2 left-0 w-72 h-72 bg-pink/3 rounded-full blur-3xl -translate-y-1/2"></div>
    <div class="absolute top-1/2 right-0 w-72 h-72 bg-blue/3 rounded-full blur-3xl -translate-y-1/2"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          Screenshots
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-text mb-4">
          See it in action
        </h2>
        <p class="text-xl text-subtext0 max-w-2xl mx-auto">
          A beautiful interface designed with care for the best experience
        </p>
      </div>

      <!-- Screenshot Gallery - Clean static layout -->
      <div class="flex justify-center items-end gap-3 md:gap-5 lg:gap-6 flex-wrap">
        <div 
          v-for="(screenshot, index) in screenshots" 
          :key="index"
          class="relative cursor-pointer"
          :class="[
            index === 2 ? 'z-10' : 'z-0'
          ]"
          :style="{
            transform: `rotate(${index === 0 ? -6 : index === 1 ? -3 : index === 2 ? 0 : index === 3 ? 3 : 6}deg) translateY(${index === 0 || index === 4 ? '0.5rem' : index === 1 || index === 3 ? '0.25rem' : '0'})`
          }"
          @click="openLightbox(index)"
        >
          <div class="relative rounded-3xl bg-surface0 p-2 md:p-3 shadow-xl">
            <img 
              :src="screenshot.src" 
              :alt="screenshot.alt" 
              class="w-28 md:w-36 lg:w-44 h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      <!-- Pagination dots -->
      <div class="flex justify-center gap-2 mt-10">
        <button 
          v-for="(_, index) in screenshots" 
          :key="index"
          @click="openLightbox(index)"
          class="h-2 rounded-full transition-all duration-300"
          :class="index === lightboxIndex ? 'bg-primary w-6' : 'bg-surface1 w-2'"
        ></button>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div 
          v-if="lightboxOpen" 
          class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-crust/95 backdrop-blur-lg p-4"
          @click.self="closeLightbox"
        >
          <!-- Close button -->
          <button 
            @click="closeLightbox"
            class="absolute top-4 right-4 p-2 rounded-full bg-surface0/80 backdrop-blur text-text hover:bg-surface1 transition-colors z-10"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <!-- Main image container -->
          <div class="relative w-48 sm:w-56 md:w-64 lg:w-72 max-h-[70vh]">
            <div class="rounded-2xl bg-surface0 p-2 shadow-2xl">
              <img 
                :src="screenshots[lightboxIndex].src" 
                :alt="screenshots[lightboxIndex].alt" 
                class="w-full h-auto rounded-xl"
              />
            </div>
          </div>
          
          <!-- Image info & Navigation -->
          <div class="mt-4 flex flex-col items-center gap-3">
            <p class="text-text font-semibold">{{ screenshots[lightboxIndex].title }}</p>
            
            <!-- Navigation -->
            <div class="flex items-center gap-4">
              <button 
                @click="prevImage"
                class="p-3 rounded-full bg-surface0 text-text hover:bg-surface1 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              <!-- Dots -->
              <div class="flex items-center gap-2">
                <span 
                  v-for="(_, i) in screenshots" 
                  :key="i" 
                  @click="lightboxIndex = i"
                  class="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                  :class="i === lightboxIndex ? 'bg-primary w-4' : 'bg-surface2 hover:bg-surface1'"
                ></span>
              </div>

              <button 
                @click="nextImage"
                class="p-3 rounded-full bg-surface0 text-text hover:bg-surface1 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            
            <p class="text-subtext0 text-sm">{{ lightboxIndex + 1 }} / {{ screenshots.length }}</p>
          </div>

          <!-- Keyboard hint - desktop only -->
          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-4 text-subtext0 text-sm opacity-50">
            <span class="flex items-center gap-1">
              <kbd class="px-2 py-1 rounded bg-surface0 text-xs">←</kbd>
              <kbd class="px-2 py-1 rounded bg-surface0 text-xs">→</kbd>
              Navigate
            </span>
            <span class="flex items-center gap-1">
              <kbd class="px-2 py-1 rounded bg-surface0 text-xs">Esc</kbd>
              Close
            </span>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
