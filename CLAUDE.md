# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

PixelPlayer Web is a landing page for [PixelPlayer](https://github.com/theovilardo/PixelPlayer), a Material 3 music player for Android. Built with Vue 3, Vite, and TailwindCSS.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## Architecture

### Routing

Vue Router with two routes:
- `/` - Home page with all landing sections
- `/changelog` - Full changelog page

### Directory Structure

- `src/components/` - Reusable UI components (NavBar, Hero, Features, etc.)
- `src/pages/` - Page-level components (Home.vue, ChangelogPage.vue)
- `src/composables/` - Vue composables (useTheme.js for dark/light mode)
- `src/utils/` - Utilities (cache.js for GitHub API caching)
- `src/router/` - Router configuration

### Key Patterns

**GitHub API Caching** (`src/utils/cache.js`):
- API responses are cached in localStorage with 5-minute TTL
- Use `fetchWithCache(url, cacheKey, ttl)` for GitHub API calls

**Theme System** (`src/composables/useTheme.js`):
- Uses Catppuccin Mocha color palette
- Dark mode by default, respects system preference, persisted to localStorage
- Tailwind config maps CSS custom properties to `rgb(var(--ctp-*) / <alpha-value>)` format

**Component Structure**:
- Single-file Vue components with `<script setup>` syntax
- Tailwind utility classes for styling
- Components expect Catppuccin color tokens (base, mantle, text, primary, etc.)
