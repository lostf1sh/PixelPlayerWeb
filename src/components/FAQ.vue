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
  <div class="py-16 bg-mantle" id="faq">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-base text-primary font-semibold tracking-wide uppercase">FAQ</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-text sm:text-4xl">
          Frequently Asked Questions
        </p>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" 
             class="bg-surface0 rounded-2xl overflow-hidden transition-all duration-300"
             :class="{ 'ring-2 ring-primary/50': faq.open }">
          <button @click="toggleFaq(index)" 
                  class="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-surface1/50 transition-colors">
            <span class="font-semibold text-text">{{ faq.question }}</span>
            <svg class="w-5 h-5 text-subtext0 transition-transform duration-300" 
                 :class="{ 'rotate-180': faq.open }"
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div v-show="faq.open" class="px-6 pb-4">
            <p class="text-subtext0">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
