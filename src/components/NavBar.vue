<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-base/80 backdrop-blur-md border-b border-surface0/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center gap-3">
          <img class="h-10 w-10" src="@/assets/logo.png" alt="PixelPlayer Logo" />
          <span class="font-bold text-xl text-text tracking-wide">PixelPlayer</span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a href="#features" class="text-subtext0 hover:text-text hover:bg-surface0 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</a>
            <a href="#screenshots" class="text-subtext0 hover:text-text hover:bg-surface0 px-3 py-2 rounded-md text-sm font-medium transition-colors">Screenshots</a>
            <a href="https://github.com/theovilardo/PixelPlayer" target="_blank" class="bg-primary text-base font-bold px-4 py-2 rounded-full hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95">
              Get App
            </a>
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
        <a href="#features" class="text-subtext0 hover:text-text hover:bg-surface0 block px-3 py-2 rounded-md text-base font-medium">Features</a>
        <a href="#screenshots" class="text-subtext0 hover:text-text hover:bg-surface0 block px-3 py-2 rounded-md text-base font-medium">Screenshots</a>
        <a href="https://github.com/theovilardo/PixelPlayer" target="_blank" class="text-primary hover:bg-surface0 block px-3 py-2 rounded-md text-base font-bold">Get App</a>
      </div>
    </div>
  </nav>
</template>
