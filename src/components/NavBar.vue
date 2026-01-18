<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTheme } from '../composables/useTheme'

const router = useRouter()
const route = useRoute()
const isOpen = ref(false)
const showDownloadModal = ref(false)
const { isDark, toggleTheme } = useTheme()

const openDownloadModal = () => {
  showDownloadModal.value = true
}

const closeDownloadModal = () => {
  showDownloadModal.value = false
}

const goHome = () => {
  isOpen.value = false
  if (route.path !== '/') {
    router.push('/')
  } else {
    const element = document.getElementById('hero')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

const navigateTo = (sectionId) => {
  isOpen.value = false
  if (route.path !== '/') {
    // Navigate to home first, then scroll
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    })
  } else {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-base/80 backdrop-blur-md border-b border-surface0/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <button @click="goHome" class="flex-shrink-0 flex items-center gap-3 cursor-pointer">
          <img class="h-10 w-10" src="@/assets/logo.png" alt="PixelPlayer Logo" />
          <span class="font-bold text-xl text-text tracking-wide">PixelPlayer</span>
        </button>
        
        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <button @click="navigateTo('features')" class="text-subtext0 hover:text-text hover:bg-surface0 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</button>
            <button @click="navigateTo('screenshots')" class="text-subtext0 hover:text-text hover:bg-surface0 px-3 py-2 rounded-md text-sm font-medium transition-colors">Screenshots</button>
            <button @click="navigateTo('faq')" class="text-subtext0 hover:text-text hover:bg-surface0 px-3 py-2 rounded-md text-sm font-medium transition-colors">FAQ</button>
            <router-link to="/changelog" class="text-subtext0 hover:text-text hover:bg-surface0 px-3 py-2 rounded-md text-sm font-medium transition-colors">Changelog</router-link>
            <button @click="navigateTo('community')" class="text-subtext0 hover:text-text hover:bg-surface0 px-3 py-2 rounded-md text-sm font-medium transition-colors">Community</button>
            <button 
              @click="toggleTheme"
              class="p-2 rounded-lg hover:bg-surface0 transition-colors text-subtext0 hover:text-text"
              :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            >
              <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
              <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            </button>
            <button 
              @click="openDownloadModal"
              class="bg-primary text-crust font-bold px-4 py-2 rounded-full hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95"
            >
              Get App
            </button>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex md:hidden">
          <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-subtext0 hover:text-text hover:bg-surface0 focus:outline-none" aria-controls="mobile-menu" :aria-expanded="isOpen">
            <span class="sr-only">Open main menu</span>
            <svg v-if="!isOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-base border-b border-surface0/50">
        <button @click="navigateTo('features')" class="text-subtext0 hover:text-text hover:bg-surface0 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Features</button>
        <button @click="navigateTo('screenshots')" class="text-subtext0 hover:text-text hover:bg-surface0 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Screenshots</button>
        <button @click="navigateTo('faq')" class="text-subtext0 hover:text-text hover:bg-surface0 block px-3 py-2 rounded-md text-base font-medium w-full text-left">FAQ</button>
        <router-link to="/changelog" @click="isOpen = false" class="text-subtext0 hover:text-text hover:bg-surface0 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Changelog</router-link>
        <button @click="navigateTo('community')" class="text-subtext0 hover:text-text hover:bg-surface0 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Community</button>
        <button @click="toggleTheme" class="text-subtext0 hover:text-text hover:bg-surface0 flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium w-full text-left">
          <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
          {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </button>
        <button @click="openDownloadModal" class="text-primary hover:bg-surface0 block px-3 py-2 rounded-md text-base font-bold w-full text-left">Get App</button>
      </div>
    </div>
  </nav>

  <!-- Download Modal -->
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="showDownloadModal" 
        class="fixed inset-0 z-[100] flex items-center justify-center bg-crust/90 backdrop-blur-sm p-4"
        @click.self="closeDownloadModal"
      >
        <div class="bg-surface0 rounded-2xl p-6 max-w-sm w-full border border-surface1 shadow-2xl">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-xl font-bold text-text">Download PixelPlayer</h3>
            <button @click="closeDownloadModal" class="p-1 rounded-lg hover:bg-surface1 transition-colors">
              <svg class="w-5 h-5 text-subtext0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <p class="text-subtext0 text-sm mb-5">Choose your preferred download method:</p>
          
          <div class="space-y-3">
            <!-- GitHub Releases -->
            <a 
              href="https://github.com/theovilardo/PixelPlayer/releases" 
              target="_blank"
              @click="closeDownloadModal"
              class="flex items-center gap-4 p-4 rounded-xl bg-surface1 hover:bg-surface2 transition-colors group"
            >
              <div class="w-12 h-12 rounded-xl bg-text/10 flex items-center justify-center">
                <svg class="w-6 h-6 text-text" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-text">GitHub Releases</p>
                <p class="text-sm text-subtext0">Download the latest APK directly</p>
              </div>
              <svg class="w-5 h-5 text-subtext0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>

            <!-- Obtainium -->
            <a 
              href="https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/theovilardo/PixelPlayer" 
              target="_blank"
              @click="closeDownloadModal"
              class="flex items-center gap-4 p-4 rounded-xl bg-surface1 hover:bg-surface2 transition-colors group"
            >
              <div class="w-12 h-12 rounded-xl bg-green/15 flex items-center justify-center">
                <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-text">Obtainium</p>
                <p class="text-sm text-subtext0">Auto-update via Obtainium app</p>
              </div>
              <svg class="w-5 h-5 text-subtext0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
