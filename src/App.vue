<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Screenshots from './components/Screenshots.vue'
import FAQ from './components/FAQ.vue'
import Community from './components/Community.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-base text-text selection:bg-primary selection:text-base scroll-smooth">
    <NavBar />
    <main>
      <Hero />
      <Features />
      <Screenshots />
      <FAQ />
      <Community />
    </main>
    <Footer />
  </div>
</template>
