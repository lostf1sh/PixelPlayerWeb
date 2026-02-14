<script setup>
const steps = [
  {
    number: '1',
    title: 'Fork',
    description: 'Fork the repository to your GitHub account',
    icon: 'fork'
  },
  {
    number: '2',
    title: 'Clone',
    description: 'Clone your fork to your local machine',
    icon: 'clone'
  },
  {
    number: '3',
    title: 'Develop',
    description: 'Create a branch and make your changes',
    icon: 'code'
  },
  {
    number: '4',
    title: 'Submit',
    description: 'Push and create a Pull Request',
    icon: 'pr'
  }
]

const contributionTypes = [
  {
    title: 'Code',
    description: 'Fix bugs or add new features',
    icon: 'code',
    color: 'blue'
  },
  {
    title: 'Bug Reports',
    description: 'Found a bug? Let us know!',
    icon: 'bug',
    color: 'red'
  },
  {
    title: 'Translations',
    description: 'Help translate to your language',
    icon: 'translate',
    color: 'green'
  },
  {
    title: 'Documentation',
    description: 'Improve docs and guides',
    icon: 'docs',
    color: 'peach'
  }
]
</script>

<template>
  <section id="contributing" class="section-wrap relative overflow-hidden">
    <div class="absolute top-1/3 right-0 w-96 h-96 bg-mauve/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-1/3 left-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl"></div>

    <div class="section-container relative z-10 max-w-6xl">
      <div class="section-header">
        <span class="section-kicker border-mauve/25 bg-mauve/10 text-mauve">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
          Open Source
        </span>
        <h2 class="section-title">
          Contribute
        </h2>
        <p class="section-copy max-w-2xl mx-auto">
          PixelPlayer is open source. We welcome contributions of all kinds!
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 mb-12">
        <div class="card-surface p-6 md:p-8">
          <h3 class="text-2xl font-bold text-text mb-6">How to Contribute</h3>
          <div class="space-y-4">
            <div 
              v-for="(step, index) in steps" 
              :key="index"
              class="flex items-start gap-4"
            >
              <div class="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold flex-shrink-0">
                {{ step.number }}
              </div>
              <div class="pt-1">
                <h4 class="font-semibold text-text">{{ step.title }}</h4>
                <p class="text-subtext0 text-sm">{{ step.description }}</p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 mt-8">
            <a 
              href="https://github.com/theovilardo/PixelPlayer/fork" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Fork on GitHub
            </a>
            <a 
              href="https://github.com/theovilardo/PixelPlayer/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
              Good First Issues
            </a>
          </div>
        </div>

        <div class="card-surface p-6 md:p-8">
          <h3 class="text-2xl font-bold text-text mb-6">Ways to Contribute</h3>
          <div class="grid grid-cols-2 gap-4">
            <div 
              v-for="(type, index) in contributionTypes" 
              :key="index"
              class="rounded-xl border border-surface1/60 bg-mantle/80 p-4 transition-colors hover:bg-crust/80"
            >
              <div 
                class="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                :class="`bg-${type.color}/20`"
              >
                <svg v-if="type.icon === 'code'" class="w-5 h-5" :class="`text-${type.color}`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                <svg v-else-if="type.icon === 'bug'" class="w-5 h-5" :class="`text-${type.color}`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <svg v-else-if="type.icon === 'translate'" class="w-5 h-5" :class="`text-${type.color}`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
                </svg>
                <svg v-else-if="type.icon === 'docs'" class="w-5 h-5" :class="`text-${type.color}`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-text mb-1">{{ type.title }}</h4>
              <p class="text-subtext0 text-sm">{{ type.description }}</p>
            </div>
          </div>

          <div class="mt-6 rounded-xl border border-surface1 bg-mantle/80 p-4">
            <div class="flex items-center gap-3 mb-2">
              <svg class="w-5 h-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="font-semibold text-text">Development Stack</span>
            </div>
            <p class="text-subtext0 text-sm">
              Android Studio • Kotlin • Jetpack Compose • Material3 • ExoPlayer
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
