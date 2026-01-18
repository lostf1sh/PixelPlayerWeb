<script setup>
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-primary focus:text-crust focus:font-bold focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
    Skip to main content
  </a>
  <router-view />
</template>
