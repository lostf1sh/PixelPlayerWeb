<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    question: 'Is PixelPlayer free?',
    answer: 'Yes! PixelPlayer is completely free and open-source. No ads, no subscriptions, no hidden costs.',
    open: false
  },
  {
    question: 'Where can I download PixelPlayer?',
    answer: 'You can download the latest APK from our GitHub Releases page. We are working on bringing it to F-Droid and other app stores soon.',
    open: false
  },
  {
    question: 'Does it support streaming services?',
    answer: 'No, PixelPlayer is designed for local music playback only. It scans your device for music files and plays them offline.',
    open: false
  },
  {
    question: 'How do synced lyrics work?',
    answer: 'PixelPlayer fetches lyrics from online sources and syncs them with the current playback position. You can also import your own LRC files.',
    open: false
  },
  {
    question: 'Can I contribute to the project?',
    answer: 'Absolutely! We welcome contributions of all kinds. Check out our GitHub repository for more information on how to get started.',
    open: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}
</script>

<template>
  <div class="py-20 bg-mantle relative overflow-hidden" id="faq">
    <!-- Background decorations -->
    <div class="absolute top-0 right-1/4 w-72 h-72 bg-lavender/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-1/4 w-72 h-72 bg-mauve/5 rounded-full blur-3xl"></div>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/10 text-lavender text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          FAQ
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-text mb-4">
          Frequently Asked Questions
        </h2>
        <p class="text-xl text-subtext0">
          Got questions? We've got answers
        </p>
      </div>

      <div class="space-y-5">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="group bg-surface0 rounded-3xl overflow-hidden transition-all duration-500 ease-out"
          :class="{ 
            'ring-2 ring-primary/50 shadow-lg shadow-primary/10': faq.open,
            'hover:bg-surface0/80': !faq.open 
          }"
        >
          <button 
            @click="toggleFaq(index)" 
            class="w-full px-8 py-6 text-left flex items-center justify-between gap-4 transition-colors duration-300"
          >
            <div class="flex items-center gap-5">
              <!-- Animated indicator -->
              <div 
                class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500"
                :class="faq.open ? 'bg-primary/20 text-primary rotate-0' : 'bg-surface1 text-subtext0 group-hover:bg-surface2'"
              >
                <svg 
                  class="w-5 h-5 transition-transform duration-500" 
                  :class="{ 'rotate-45': faq.open }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <span class="font-semibold text-text text-xl">{{ faq.question }}</span>
            </div>
            <svg 
              class="w-5 h-5 text-subtext0 transition-all duration-500 flex-shrink-0" 
              :class="{ 'rotate-180 text-primary': faq.open }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <!-- Animated answer container -->
          <Transition
            enter-active-class="transition-all duration-500 ease-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-48 opacity-100"
            leave-active-class="transition-all duration-300 ease-in"
            leave-from-class="max-h-48 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="faq.open" class="overflow-hidden">
              <div class="px-8 pb-6">
                <div class="pl-[3.75rem] border-l-2 border-primary/30">
                  <p class="text-subtext0 text-lg leading-relaxed animate-fade-in-up">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.4s ease-out;
}

.max-h-0 {
  max-height: 0;
}

.max-h-48 {
  max-height: 12rem;
}
</style>
