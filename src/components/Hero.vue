<script setup>
</script>

<template>
  <div class="relative min-h-screen flex items-center bg-base">
    <div class="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-20">
      <!-- Text Content -->
      <div class="text-center lg:text-left lg:w-1/2">
        <h1 class="text-5xl md:text-6xl font-bold tracking-tight text-text mb-4">
          PixelPlayer
        </h1>
        <p class="text-xl md:text-2xl text-subtext0 mb-6">
          A local music player for Android, built with Material 3.
        </p>
        <p class="text-base text-subtext1 mb-8 max-w-md mx-auto lg:mx-0">
          Open-source, ad-free, and designed to feel at home on your device. Play your music, your way.
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
          <a 
            href="https://github.com/theovilardo/PixelPlayer/releases" 
            target="_blank" 
            class="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl text-crust bg-primary hover:bg-lavender transition-colors"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download APK
          </a>
          <a 
            href="https://github.com/theovilardo/PixelPlayer" 
            target="_blank" 
            class="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium rounded-xl text-text bg-surface0 hover:bg-surface1 border border-surface1 transition-colors"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>

        <div class="mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-subtext0">
          <span class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-green"></span>
            Open Source
          </span>
          <span class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-green"></span>
            No Ads
          </span>
          <span class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-green"></span>
            Offline
          </span>
        </div>
      </div>

      <!-- Screenshot -->
      <div class="lg:w-1/2 flex justify-center">
        <div class="relative">
          <div class="w-56 md:w-64 rounded-[2rem] bg-surface0 p-2 shadow-2xl">
            <img 
              src="@/assets/screenshots/player.jpg" 
              alt="PixelPlayer Screenshot" 
              class="w-full h-auto rounded-[1.5rem]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
