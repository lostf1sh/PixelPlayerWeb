// Shared markdown parsing utility
// Used by LatestRelease, Changelog, and ChangelogPage components

export const parseMarkdown = (text) => {
  if (!text) return ''

  return text
    .replace(/^### (.*$)/gim, '<h4 class="text-base font-semibold text-text mt-3 mb-1">$1</h4>')
    .replace(/^## (.*$)/gim, '<h3 class="text-lg font-semibold text-text mt-4 mb-2">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-text">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-surface1 rounded text-sm text-primary">$1</code>')
    .replace(/^\* (.*$)/gim, '<li class="ml-4 text-subtext0">• $1</li>')
    .replace(/^- (.*$)/gim, '<li class="ml-4 text-subtext0">• $1</li>')
    .replace(/\n\n/g, '</p><p class="mt-2">')
    .replace(/\n/g, '<br>')
}
