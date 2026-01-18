<script setup>
const testimonials = [
  {
    name: 'Alex K.',
    rating: 5,
    comment: 'Material You support is amazing! The colors matching my wallpaper look so good.',
    source: 'github'
  },
  {
    name: 'Sarah M.',
    rating: 5,
    comment: 'Finally a music player that respects my privacy. No ads, no tracking. Just music.',
    source: 'telegram'
  },
  {
    name: 'Carlos R.',
    rating: 5,
    comment: 'The equalizer is amazing! 10 bands with presets, exactly what I needed.',
    source: 'github'
  },
  {
    name: 'Mike J.',
    rating: 5,
    comment: 'Synced lyrics feature is incredible. No need to search for another app anymore.',
    source: 'telegram'
  },
  {
    name: 'Emma L.',
    rating: 5,
    comment: 'Chromecast support works flawlessly. Love casting my music to the living room.',
    source: 'github'
  },
  {
    name: 'Kenji T.',
    rating: 5,
    comment: 'Gapless playback finally! Perfect for listening to live albums and DJ mixes.',
    source: 'github'
  }
]

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const getAvatarColor = (index) => {
  const colors = ['bg-blue/20 text-blue', 'bg-pink/20 text-pink', 'bg-green/20 text-green', 'bg-peach/20 text-peach', 'bg-mauve/20 text-mauve', 'bg-teal/20 text-teal']
  return colors[index % colors.length]
}
</script>

<template>
  <div class="py-20 bg-base relative overflow-hidden" id="testimonials">
    <div class="absolute top-1/4 left-0 w-96 h-96 bg-pink/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-12">
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink/10 text-pink text-sm font-medium mb-4">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          Reviews
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-text mb-4">
          Loved by Users
        </h2>
        <p class="text-xl text-subtext0 max-w-2xl mx-auto">
          See what our community has to say about PixelPlayer
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-surface0 rounded-2xl p-6 border border-surface1 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
        >
          <div class="flex items-center gap-4 mb-4">
            <div :class="['w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg', getAvatarColor(index)]">
              {{ getInitials(testimonial.name) }}
            </div>
            <div class="flex-1">
              <h4 class="font-semibold text-text">{{ testimonial.name }}</h4>
              <div class="flex items-center gap-2">
                <div class="flex">
                  <svg v-for="star in testimonial.rating" :key="star" class="w-4 h-4 text-yellow" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                </div>
                <span v-if="testimonial.source === 'github'" class="text-subtext0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                <span v-else class="text-subtext0">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <p class="text-subtext0 leading-relaxed">{{ testimonial.comment }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
