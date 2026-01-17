<script setup>
import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
import GitHubStats from '../components/GitHubStats.vue'
import Features from '../components/Features.vue'
import Screenshots from '../components/Screenshots.vue'
import LatestRelease from '../components/LatestRelease.vue'
import FAQ from '../components/FAQ.vue'
import Community from '../components/Community.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-base text-text selection:bg-primary selection:text-base scroll-smooth">
    <NavBar />
    <main>
      <Hero />
      <GitHubStats />
      <Features />
      <Screenshots />
      <LatestRelease />
      <FAQ />
      <Community />
    </main>
    <Footer />
  </div>
</template>
