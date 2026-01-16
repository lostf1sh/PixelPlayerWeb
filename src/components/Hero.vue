<script setup>
</script>

<template>
  <div class="relative overflow-hidden bg-base pt-32 pb-16 lg:pt-40 lg:pb-32">
    <!-- Background Decor -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none opacity-20">
       <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
       <div class="absolute top-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
       <div class="absolute -bottom-32 left-1/2 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
      <!-- Text Content -->
      <div class="text-center lg:text-left lg:w-1/2">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text mb-6">
          <span class="block">PixelPlayer</span>
          <span class="block text-primary text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold">Music, Reimagined.</span>
        </h1>
        <p class="mt-4 max-w-lg mx-auto lg:mx-0 text-xl text-subtext0 sm:max-w-3xl">
          Material Design 3 Expressive music player for Android. Feature-rich, open-source, and beautifully coherent.
        </p>
        <div class="mt-10 flex justify-center lg:justify-start gap-4">
          <a href="https://github.com/theovilardo/PixelPlayer/releases" target="_blank" class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-base bg-primary hover:bg-primary/90 md:py-4 md:text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-primary/30">
            Download APK
          </a>
          <a href="https://github.com/theovilardo/PixelPlayer" target="_blank" class="flex items-center justify-center px-8 py-3 border border-surface1 text-base font-medium rounded-full text-text bg-surface0 hover:bg-surface1 md:py-4 md:text-lg transition-colors">
            GitHub
          </a>
        </div>
        <div class="mt-8 flex items-center justify-center lg:justify-start gap-2 text-subtext1 text-sm">
           <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm-1-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
           <span>Open Source & Ad-Free</span>
        </div>
      </div>

      <!-- Image Content -->
      <div class="mt-16 lg:mt-0 lg:w-1/2 flex justify-center relative">
        <div class="relative w-52 md:w-60 rounded-[2.5rem] border-4 border-surface0 shadow-2xl bg-crust rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
            <img src="@/assets/screenshots/player.jpg" alt="App Screenshot" class="w-full h-full object-cover rounded-[2rem]" />
        </div>
        <!-- Floaters -->
        <div class="absolute -right-4 bottom-20 w-48 p-4 rounded-2xl bg-surface0/90 backdrop-blur shadow-xl animate-float hidden md:block">
            <div class="flex items-center gap-3">
               <div class="w-10 h-10 rounded-full bg-red/20 text-red flex items-center justify-center">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
               </div>
               <div>
                  <p class="text-xs text-subtext0">Now Playing</p>
                  <p class="text-sm font-bold text-text">Synced Lyrics</p>
               </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-float {
    animation: float 6s ease-in-out infinite;
}
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
}
</style>
