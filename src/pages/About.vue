<script setup>
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-base text-text selection:bg-primary selection:text-base">
    <NavBar />

    <main id="main" class="pt-20">
      <!-- Hero Section -->
      <div class="bg-mantle py-16 md:py-20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-text mb-4">About PixelPlayer</h1>
          <p class="text-lg text-subtext0 max-w-2xl mx-auto">
            A beautiful Material 3 music player for Android, designed to feel at home on your device.
          </p>
        </div>
      </div>

      <!-- About Content -->
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <!-- Mission -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-text mb-4">Our Mission</h2>
          <p class="text-subtext0 text-lg leading-relaxed">
            PixelPlayer was created with a simple mission: to provide a beautiful, privacy-respecting music
            player that puts the user first. We believe that music players should be simple, fast, and
            respect your privacy - no ads, no tracking, no unnecessary permissions.
          </p>
        </section>

        <!-- Features Grid -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-text mb-6">What Makes PixelPlayer Special</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-surface0 rounded-2xl p-6">
              <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-text mb-2">Material 3 Design</h3>
              <p class="text-subtext0">
                Built with Google's latest Material Design guidelines for a modern, expressive look.
              </p>
            </div>

            <div class="bg-surface0 rounded-2xl p-6">
              <div class="w-12 h-12 rounded-xl bg-blue/20 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-text mb-2">Privacy First</h3>
              <p class="text-subtext0">
                No ads, no tracking, no unnecessary permissions. Your music stays on your device.
              </p>
            </div>

            <div class="bg-surface0 rounded-2xl p-6">
              <div class="w-12 h-12 rounded-xl bg-green/20 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-text mb-2">Open Source</h3>
              <p class="text-subtext0">
                Completely open source and transparent. Anyone can contribute or audit the code.
              </p>
            </div>

            <div class="bg-surface0 rounded-2xl p-6">
              <div class="w-12 h-12 rounded-xl bg-pink/20 flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"/>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-text mb-2">Synced Lyrics</h3>
              <p class="text-subtext0">
                Beautiful synced lyrics support with the ability to import your own LRC files.
              </p>
            </div>
          </div>
        </section>

        <!-- Tech Stack -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-text mb-4">Technology</h2>
          <p class="text-subtext0 text-lg leading-relaxed mb-6">
            PixelPlayer is built using modern Android development practices and the latest Jetpack libraries.
            The app follows Clean Architecture principles for maintainability and testability.
          </p>
          <div class="flex flex-wrap gap-3">
            <span class="px-4 py-2 rounded-full bg-surface0 text-subtext0 text-sm">Kotlin</span>
            <span class="px-4 py-2 rounded-full bg-surface0 text-subtext0 text-sm">Jetpack Compose</span>
            <span class="px-4 py-2 rounded-full bg-surface0 text-subtext0 text-sm">Material 3</span>
            <span class="px-4 py-2 rounded-full bg-surface0 text-subtext0 text-sm">Room Database</span>
            <span class="px-4 py-2 rounded-full bg-surface0 text-subtext0 text-sm">ExoPlayer</span>
            <span class="px-4 py-2 rounded-full bg-surface0 text-subtext0 text-sm">MVVM Architecture</span>
          </div>
        </section>

        <!-- Open Source -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold text-text mb-4">Open Source</h2>
          <p class="text-subtext0 text-lg leading-relaxed mb-6">
            PixelPlayer is open source under the MIT License. We welcome contributions from the community!
            Whether you want to report a bug, suggest a feature, or submit a pull request, your help is
            appreciated.
          </p>
          <a
            href="https://github.com/theovilardo/PixelPlayer"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-surface0 text-text font-medium rounded-full hover:bg-surface1 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </section>

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
