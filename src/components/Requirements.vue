<script setup>
const requirements = [
  {
    icon: 'android',
    title: 'Android Version',
    value: 'Android 11+',
    description: 'API Level 30 or higher',
    color: 'green',
    bgClass: 'bg-green/20',
    textClass: 'text-green'
  },
  {
    icon: 'memory',
    title: 'RAM',
    value: '4 GB',
    description: 'Minimum required',
    color: 'blue',
    bgClass: 'bg-blue/20',
    textClass: 'text-blue'
  },
  {
    icon: 'storage',
    title: 'Storage',
    value: '~30 MB',
    description: 'App size',
    color: 'peach',
    bgClass: 'bg-peach/20',
    textClass: 'text-peach'
  },
  {
    icon: 'cpu',
    title: 'Architecture',
    value: 'ARM64, ARM, x86',
    description: 'All major architectures',
    color: 'mauve',
    bgClass: 'bg-mauve/20',
    textClass: 'text-mauve'
  },
  {
    icon: 'permissions',
    title: 'Permissions',
    value: 'Storage, Media',
    description: 'Required for playback',
    color: 'pink',
    bgClass: 'bg-pink/20',
    textClass: 'text-pink'
  },
  {
    icon: 'optional',
    title: 'Optional',
    value: 'Notifications',
    description: 'For media controls',
    color: 'teal',
    bgClass: 'bg-teal/20',
    textClass: 'text-teal'
  }
]
</script>

<template>
  <div class="py-20 bg-mantle relative overflow-hidden" id="requirements">
    <div class="absolute top-0 left-1/4 w-72 h-72 bg-green/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 right-1/4 w-72 h-72 bg-blue/5 rounded-full blur-3xl"></div>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/10 text-green text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
          Requirements
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-text mb-4">
          System Requirements
        </h2>
        <p class="text-xl text-subtext0 max-w-2xl mx-auto">
          Make sure your device meets these requirements for the best experience
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <div 
          v-for="(req, index) in requirements" 
          :key="index"
          class="bg-surface0 rounded-2xl p-5 md:p-6 border border-surface1 hover:border-primary/30 transition-all duration-300"
        >
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            :class="req.bgClass"
          >
            <svg v-if="req.icon === 'android'" class="w-6 h-6" :class="req.textClass" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.523 15.341c-.5 0-.907-.403-.907-.9s.407-.9.907-.9c.5 0 .907.403.907.9s-.407.9-.907.9zm-11.046 0c-.5 0-.907-.403-.907-.9s.407-.9.907-.9c.5 0 .907.403.907.9s-.407.9-.907.9zm11.4-6.227l1.94-3.341c.105-.182.043-.418-.139-.523-.182-.105-.418-.043-.523.139L17.18 8.77c-1.54-.7-3.27-1.09-5.18-1.09s-3.64.39-5.18 1.09L4.845 5.389c-.105-.182-.341-.244-.523-.139-.182.105-.244.341-.139.523l1.94 3.341C2.67 10.97.5 14.227.5 18h23c0-3.773-2.17-7.03-5.623-8.886z"/>
            </svg>
            <svg v-else-if="req.icon === 'memory'" class="w-6 h-6" :class="req.textClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            </svg>
            <svg v-else-if="req.icon === 'storage'" class="w-6 h-6" :class="req.textClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
            </svg>
            <svg v-else-if="req.icon === 'cpu'" class="w-6 h-6" :class="req.textClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <svg v-else-if="req.icon === 'permissions'" class="w-6 h-6" :class="req.textClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <svg v-else-if="req.icon === 'optional'" class="w-6 h-6" :class="req.textClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </div>
          <h3 class="font-semibold text-text text-sm mb-1">{{ req.title }}</h3>
          <p class="text-text text-lg font-bold mb-1">{{ req.value }}</p>
          <p class="text-subtext0 text-sm">{{ req.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
