<script setup>
import NavBar from '../components/NavBar.vue'
import Hero from '../components/Hero.vue'
import GitHubStats from '../components/GitHubStats.vue'
import Features from '../components/Features.vue'
import Screenshots from '../components/Screenshots.vue'
import LatestRelease from '../components/LatestRelease.vue'
import FAQ from '../components/FAQ.vue'
import Requirements from '../components/Requirements.vue'
import Community from '../components/Community.vue'
import Contributing from '../components/Contributing.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="app-shell">
    <div class="orb -left-20 top-32 h-72 w-72 bg-primary/15"></div>
    <div class="orb -right-20 top-[32rem] h-72 w-72 bg-blue/15"></div>
    <NavBar />
    <main id="main">
      <Hero />
      <GitHubStats />
      <Features />
      <Screenshots />
      <LatestRelease />
      <FAQ />
      <Requirements />
      <Community />
      <Contributing />
    </main>
    <Footer />
  </div>
</template>
