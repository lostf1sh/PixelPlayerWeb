<template>
  <div class="py-20 bg-mantle" id="features">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-text mb-4">
          Features
        </h2>
        <p class="text-xl text-subtext0">
          Everything you'd expect from a modern music player.
        </p>
      </div>

      <!-- Feature Cards Grid with Gradients -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        <!-- Material You -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-blue/10 to-lavender/5 border border-surface1">
          <div class="w-12 h-12 rounded-xl bg-blue/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
            </svg>
          </div>
          <h3 class="font-bold text-text text-lg mb-2">Material You</h3>
          <p class="text-subtext0">Dynamic colors that adapt to your wallpaper.</p>
        </div>

        <!-- ExoPlayer -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-green/10 to-teal/5 border border-surface1">
          <div class="w-12 h-12 rounded-xl bg-green/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="font-bold text-text text-lg mb-2">ExoPlayer</h3>
          <p class="text-subtext0">Gapless playback with FFmpeg support.</p>
        </div>

        <!-- Synced Lyrics -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-pink/10 to-mauve/5 border border-surface1">
          <div class="w-12 h-12 rounded-xl bg-pink/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
            </svg>
          </div>
          <h3 class="font-bold text-text text-lg mb-2">Synced Lyrics</h3>
          <p class="text-subtext0">LRC lyrics via LRCLIB, synced to playback.</p>
        </div>

        <!-- Equalizer -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-mauve/10 to-pink/5 border border-surface1">
          <div class="w-12 h-12 rounded-xl bg-mauve/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-mauve" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </div>
          <h3 class="font-bold text-text text-lg mb-2">Equalizer</h3>
          <p class="text-subtext0">10-band equalizer with presets.</p>
        </div>

        <!-- Playlists -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-peach/10 to-yellow/5 border border-surface1">
          <div class="w-12 h-12 rounded-xl bg-peach/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-peach" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
          </div>
          <h3 class="font-bold text-text text-lg mb-2">Playlists</h3>
          <p class="text-subtext0">Create playlists or import M3U files.</p>
        </div>

        <!-- Tag Editor -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-teal/10 to-green/5 border border-surface1">
          <div class="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          </div>
          <h3 class="font-bold text-text text-lg mb-2">Tag Editor</h3>
          <p class="text-subtext0">Edit MP3, FLAC, M4A metadata.</p>
        </div>

        <!-- Chromecast -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-sky/10 to-blue/5 border border-surface1">
          <div class="w-12 h-12 rounded-xl bg-sky/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
            </svg>
          </div>
          <h3 class="font-bold text-text text-lg mb-2">Chromecast</h3>
          <p class="text-subtext0">Cast to TV and smart speakers.</p>
        </div>

        <!-- Multi-format -->
        <div class="p-6 rounded-2xl bg-gradient-to-br from-yellow/10 to-peach/5 border border-surface1">
          <div class="w-12 h-12 rounded-xl bg-yellow/20 flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
          </div>
          <h3 class="font-bold text-text text-lg mb-2">Multi-format</h3>
          <p class="text-subtext0">MP3, FLAC, AAC, OGG, WAV support.</p>
        </div>
      </div>
    </div>
  </div>
</template>
