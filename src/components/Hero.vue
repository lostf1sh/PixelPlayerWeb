<script setup>
import { ref, onMounted } from 'vue'
import { fetchWithCache } from '../utils/cache'

const latestVersion = ref('Loading...')

onMounted(async () => {
  try {
    const data = await fetchWithCache(
      'https://api.github.com/repos/theovilardo/PixelPlayer/releases/latest',
      'latest_release'
    )
    latestVersion.value = data.tag_name || data.name || 'Latest'
  } catch (error) {
    latestVersion.value = 'Latest'
  }
})
</script>

<template>
  <section id="hero" class="section-wrap overflow-hidden pb-20 pt-28 md:pb-24 md:pt-32">
    <div class="orb -left-24 top-24 h-72 w-72 bg-primary/20"></div>
    <div class="orb -right-20 top-44 h-72 w-72 bg-blue/20"></div>

    <div class="section-container relative z-10">
      <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p class="inline-flex items-center gap-2 rounded-full border border-green/25 bg-green/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-green">
            <span class="h-2 w-2 animate-pulse rounded-full bg-green"></span>
            {{ latestVersion }} available now
          </p>

          <h1 class="mt-6 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
            Local music,
            <span class="bg-gradient-to-r from-primary via-blue to-pink bg-clip-text text-transparent">pixel-perfect</span>
            experience.
          </h1>

          <p class="mt-5 max-w-2xl text-base leading-relaxed text-subtext0 sm:text-lg">
            PixelPlayer is a privacy-first Android music player built with Material 3 Expressive.
            Play offline, sync lyrics, fine-tune with equalizer presets, and cast to your devices.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://github.com/theovilardo/PixelPlayer/releases"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Download APK
            </a>
            <a
              href="https://github.com/theovilardo/PixelPlayer"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Source
            </a>
          </div>

          <div class="mt-7 flex flex-wrap gap-3">
            <span class="rounded-full border border-surface1 bg-surface0/75 px-3 py-1 text-sm text-subtext0">Open Source</span>
            <span class="rounded-full border border-surface1 bg-surface0/75 px-3 py-1 text-sm text-subtext0">No Ads</span>
            <span class="rounded-full border border-surface1 bg-surface0/75 px-3 py-1 text-sm text-subtext0">Fully Offline</span>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div class="absolute inset-x-8 top-10 h-[28rem] rounded-[2.6rem] bg-gradient-to-br from-primary/20 via-blue/10 to-pink/15 blur-3xl"></div>
          <div class="absolute inset-x-4 top-6 h-[30rem] rounded-[2.8rem] border border-surface1/35"></div>

          <div class="relative mx-auto w-56 rounded-[2rem] border border-surface1/70 bg-surface0/95 p-2 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.65)] md:w-64">
            <img
              src="@/assets/screenshots/player.jpg"
              alt="PixelPlayer now playing screen"
              class="w-full rounded-[1.6rem]"
              width="465"
              height="1024"
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
          </div>

          <div class="card-surface absolute -left-2 bottom-7 w-44 rounded-2xl bg-base/85 p-3 md:-left-8">
            <p class="text-xs uppercase tracking-[0.14em] text-subtext0">Smooth playback</p>
            <p class="mt-1 text-sm font-semibold text-text">FFmpeg + ExoPlayer pipeline</p>
          </div>

          <div class="card-surface absolute -right-2 top-9 w-44 rounded-2xl bg-base/85 p-3 md:-right-8">
            <p class="text-xs uppercase tracking-[0.14em] text-subtext0">Lyrics ready</p>
            <p class="mt-1 text-sm font-semibold text-text">Synced and manual LRC support</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
