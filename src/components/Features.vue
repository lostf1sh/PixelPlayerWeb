<script setup>
</script>

<template>
  <div class="py-16 bg-base" id="features">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Features</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl">
          Everything you need in a modern player
        </p>
      </div>

      <div class="flex flex-col gap-12">
        <!-- Feature 1: Material Design -->
        <div class="flex flex-col lg:flex-row items-center gap-8">
          <div class="lg:w-1/2 flex justify-center">
             <div class="relative w-48 md:w-56 rounded-3xl bg-surface0 p-3 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
               <img src="@/assets/screenshots/home.jpg" alt="Material Design" class="rounded-2xl w-full h-auto" />
             </div>
          </div>
          <div class="lg:w-1/2">
            <div class="flex items-center gap-4 mb-4">
              <div class="p-3 rounded-2xl bg-blue/10 text-blue">
                 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-text">Material 3 Expressive</h3>
            </div>
            <p class="text-lg text-subtext0">
              Built with the latest Material 3 guidelines. Enjoy dynamic colors that adapt to your media, fluid animations, and a UI that feels right at home on Android.
            </p>
          </div>
        </div>

        <!-- Feature 2: Synced Lyrics (Reverse Layout) -->
        <div class="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div class="lg:w-1/2 flex justify-center">
             <div class="relative w-48 md:w-56 rounded-3xl bg-surface0 p-3 shadow-xl -rotate-1 hover:rotate-0 transition-transform duration-300">
               <img src="@/assets/screenshots/lyrics.jpg" alt="Synced Lyrics" class="rounded-2xl w-full h-auto" />
             </div>
          </div>
          <div class="lg:w-1/2">
            <div class="flex items-center gap-4 mb-4">
              <div class="p-3 rounded-2xl bg-pink/10 text-pink">
                 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path></svg>
              </div>
              <h3 class="text-2xl font-bold text-text">Synced Lyrics</h3>
            </div>
            <p class="text-lg text-subtext0">
              Sing along with synchronized lyrics. PixelPlayer automatically fetches lyrics for your songs, displaying them in a beautiful, time-synced interface.
            </p>
          </div>
        </div>

        <!-- Feature 3: Smart Library -->
        <div class="flex flex-col lg:flex-row items-center gap-8">
           <div class="lg:w-1/2 flex justify-center">
             <div class="relative w-48 md:w-56 rounded-3xl bg-surface0 p-3 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
               <img src="@/assets/screenshots/library.jpg" alt="Smart Library" class="rounded-2xl w-full h-auto" />
             </div>
          </div>
          <div class="lg:w-1/2">
            <div class="flex items-center gap-4 mb-4">
               <div class="p-3 rounded-2xl bg-green/10 text-green">
                 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
               </div>
              <h3 class="text-2xl font-bold text-text">Smart Library</h3>
            </div>
            <p class="text-lg text-subtext0">
              Organize your local music collection effortlessly. Filter by artist, album, or create custom playlists. Fast, offline, and private.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
