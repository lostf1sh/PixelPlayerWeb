<script setup>
import { nextTick, onUnmounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTheme } from '../composables/useTheme'

const FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
const baseNavItemClass = 'rounded-lg px-3 py-2 text-sm font-medium transition-colors'

const router = useRouter()
const route = useRoute()
const isOpen = ref(false)
const showDownloadModal = ref(false)
const downloadModalRef = ref(null)
const lastFocusedElement = ref(null)
const { isDark, toggleTheme } = useTheme()

const getRouteItemClass = (path) => {
  if (route.path === path) {
    return 'bg-surface1/80 text-text'
  }
  return 'text-subtext0 hover:bg-surface0/70 hover:text-text'
}

const getModalFocusableElements = () => {
  if (!downloadModalRef.value) return []
  return Array.from(downloadModalRef.value.querySelectorAll(FOCUSABLE_SELECTOR))
}

const focusFirstModalElement = () => {
  const focusableElements = getModalFocusableElements()
  if (focusableElements.length > 0) {
    focusableElements[0].focus()
    return
  }

  downloadModalRef.value?.focus()
}

const openDownloadModal = () => {
  isOpen.value = false
  lastFocusedElement.value = document.activeElement
  showDownloadModal.value = true

  nextTick(() => {
    focusFirstModalElement()
  })
}

const closeDownloadModal = () => {
  showDownloadModal.value = false
}

const handleModalKeydown = (event) => {
  if (!showDownloadModal.value) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closeDownloadModal()
    return
  }

  if (event.key !== 'Tab') return

  const focusableElements = getModalFocusableElements()
  if (focusableElements.length === 0) {
    event.preventDefault()
    downloadModalRef.value?.focus()
    return
  }

  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]
  const activeElement = document.activeElement

  if (event.shiftKey) {
    if (activeElement === firstElement || !downloadModalRef.value?.contains(activeElement)) {
      event.preventDefault()
      lastElement.focus()
    }
    return
  }

  if (activeElement === lastElement) {
    event.preventDefault()
    firstElement.focus()
  }
}

watch(showDownloadModal, (isVisible) => {
  if (isVisible) {
    document.addEventListener('keydown', handleModalKeydown)
    return
  }

  document.removeEventListener('keydown', handleModalKeydown)
  if (lastFocusedElement.value instanceof HTMLElement) {
    lastFocusedElement.value.focus()
  }
})

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  }
)

onUnmounted(() => {
  document.removeEventListener('keydown', handleModalKeydown)
})

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
  <nav class="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
    <div class="mx-auto max-w-7xl rounded-2xl border border-surface1/60 bg-base/85 shadow-lg shadow-crust/30 backdrop-blur-xl">
      <div class="flex h-16 items-center justify-between px-3 sm:px-5">
        <button @click="goHome" class="flex items-center gap-3 rounded-xl px-2 py-1.5 transition-colors hover:bg-surface0/70">
          <img class="h-9 w-9 rounded-lg ring-1 ring-surface1/70" src="@/assets/logo.png" alt="PixelPlayer Logo" width="278" height="278" />
          <span class="text-lg font-bold tracking-wide text-text">PixelPlayer</span>
        </button>

        <div class="hidden items-center gap-1 lg:flex">
          <button @click="navigateTo('features')" :class="[baseNavItemClass, 'text-subtext0 hover:bg-surface0/70 hover:text-text']">Features</button>
          <button @click="navigateTo('screenshots')" :class="[baseNavItemClass, 'text-subtext0 hover:bg-surface0/70 hover:text-text']">Screenshots</button>
          <button @click="navigateTo('faq')" :class="[baseNavItemClass, 'text-subtext0 hover:bg-surface0/70 hover:text-text']">FAQ</button>
          <router-link to="/changelog" :class="[baseNavItemClass, getRouteItemClass('/changelog')]">Changelog</router-link>
          <router-link to="/about" :class="[baseNavItemClass, getRouteItemClass('/about')]">About</router-link>
          <button @click="navigateTo('community')" :class="[baseNavItemClass, 'text-subtext0 hover:bg-surface0/70 hover:text-text']">Community</button>
        </div>

        <div class="hidden items-center gap-2 lg:flex">
          <button
            @click="toggleTheme"
            class="rounded-lg p-2 text-subtext0 transition-colors hover:bg-surface0/70 hover:text-text"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0"></path>
            </svg>
            <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
          </button>
          <button @click="openDownloadModal" class="btn-primary px-4 py-2.5 text-xs sm:text-sm">
            Get App
          </button>
        </div>

        <button
          @click="isOpen = !isOpen"
          type="button"
          class="inline-flex items-center justify-center rounded-lg p-2 text-subtext0 transition-colors hover:bg-surface0/70 hover:text-text lg:hidden"
          aria-controls="mobile-menu"
          :aria-expanded="isOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg v-if="!isOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div v-show="isOpen" id="mobile-menu" class="border-t border-surface1/60 px-3 pb-4 pt-2 lg:hidden">
        <div class="space-y-1">
          <button @click="navigateTo('features')" :class="[baseNavItemClass, 'w-full text-left text-subtext0 hover:bg-surface0/70 hover:text-text']">Features</button>
          <button @click="navigateTo('screenshots')" :class="[baseNavItemClass, 'w-full text-left text-subtext0 hover:bg-surface0/70 hover:text-text']">Screenshots</button>
          <button @click="navigateTo('faq')" :class="[baseNavItemClass, 'w-full text-left text-subtext0 hover:bg-surface0/70 hover:text-text']">FAQ</button>
          <router-link to="/changelog" :class="[baseNavItemClass, 'block w-full text-left', getRouteItemClass('/changelog')]">Changelog</router-link>
          <router-link to="/about" :class="[baseNavItemClass, 'block w-full text-left', getRouteItemClass('/about')]">About</router-link>
          <button @click="navigateTo('community')" :class="[baseNavItemClass, 'w-full text-left text-subtext0 hover:bg-surface0/70 hover:text-text']">Community</button>
          <button @click="toggleTheme" :class="[baseNavItemClass, 'flex w-full items-center gap-2 text-left text-subtext0 hover:bg-surface0/70 hover:text-text']">
            <svg v-if="isDark" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0"></path>
            </svg>
            <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
            {{ isDark ? 'Light Mode' : 'Dark Mode' }}
          </button>
          <button @click="openDownloadModal" class="btn-primary mt-2 w-full justify-center">
            Get App
          </button>
        </div>
      </div>
    </div>
  </nav>

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
        class="fixed inset-0 z-[100] flex items-center justify-center bg-crust/90 p-4 backdrop-blur-sm overscroll-contain"
        @click.self="closeDownloadModal"
      >
        <div
          ref="downloadModalRef"
          class="card-surface w-full max-w-sm rounded-3xl p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="download-modal-title"
          tabindex="-1"
        >
          <div class="mb-4 flex items-center justify-between">
            <h3 id="download-modal-title" class="text-xl font-bold text-text">Download PixelPlayer</h3>
            <button
              @click="closeDownloadModal"
              class="rounded-lg p-1 transition-colors hover:bg-surface1/70"
              aria-label="Close download dialog"
            >
              <svg class="h-5 w-5 text-subtext0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <p class="mb-5 text-sm text-subtext0">Choose your preferred download method:</p>

          <div class="space-y-3">
            <a
              href="https://github.com/theovilardo/PixelPlayer/releases"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeDownloadModal"
              class="group flex items-center gap-4 rounded-xl border border-surface1/60 bg-surface0/70 p-4 transition-colors hover:bg-surface1/70"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-text/10">
                <svg class="h-6 w-6 text-text" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-text">GitHub Releases</p>
                <p class="text-sm text-subtext0">Download the latest APK directly</p>
              </div>
              <svg class="h-5 w-5 text-subtext0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>

            <a
              href="https://apps.obtainium.imranr.dev/redirect?r=obtainium://add/https://github.com/theovilardo/PixelPlayer"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeDownloadModal"
              class="group flex items-center gap-4 rounded-xl border border-surface1/60 bg-surface0/70 p-4 transition-colors hover:bg-surface1/70"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15">
                <svg class="h-6 w-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
              </div>
              <div class="flex-1">
                <p class="font-semibold text-text">Obtainium</p>
                <p class="text-sm text-subtext0">Auto-update via Obtainium app</p>
              </div>
              <svg class="h-5 w-5 text-subtext0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
