<script setup>
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <router-view />
</template>
