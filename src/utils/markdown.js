// Shared markdown parsing utility
// Used by LatestRelease and Changelog pages

const escapeHtml = (value) => {
  if (!value) return ''

  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const formatInlineMarkdown = (value) => {
  const escaped = escapeHtml(value)

  return escaped
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-surface1 rounded text-sm text-primary">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-text">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
}

export const parseMarkdown = (text) => {
  if (!text) return ''

  const lines = text.replace(/\r\n/g, '\n').split('\n')
  const htmlParts = []
  const paragraphLines = []
  let isInList = false

  const closeList = () => {
    if (!isInList) return
    htmlParts.push('</ul>')
    isInList = false
  }

  const flushParagraph = () => {
    if (paragraphLines.length === 0) return
    htmlParts.push(`<p class="mt-2">${paragraphLines.join('<br>')}</p>`)
    paragraphLines.length = 0
  }

  lines.forEach((line) => {
    const headingLevelThree = line.match(/^###\s+(.+)$/)
    if (headingLevelThree) {
      flushParagraph()
      closeList()
      htmlParts.push(`<h4 class="text-base font-semibold text-text mt-3 mb-1">${formatInlineMarkdown(headingLevelThree[1])}</h4>`)
      return
    }

    const headingLevelTwo = line.match(/^##\s+(.+)$/)
    if (headingLevelTwo) {
      flushParagraph()
      closeList()
      htmlParts.push(`<h3 class="text-lg font-semibold text-text mt-4 mb-2">${formatInlineMarkdown(headingLevelTwo[1])}</h3>`)
      return
    }

    const headingLevelOne = line.match(/^#\s+(.+)$/)
    if (headingLevelOne) {
      flushParagraph()
      closeList()
      htmlParts.push(`<h2 class="text-xl font-semibold text-text mt-5 mb-2">${formatInlineMarkdown(headingLevelOne[1])}</h2>`)
      return
    }

    const listItem = line.match(/^[-*]\s+(.+)$/)
    if (listItem) {
      flushParagraph()
      if (!isInList) {
        htmlParts.push('<ul class="mt-2 space-y-1">')
        isInList = true
      }
      htmlParts.push(`<li class="ml-4 text-subtext0">• ${formatInlineMarkdown(listItem[1])}</li>`)
      return
    }

    if (line.trim() === '') {
      flushParagraph()
      closeList()
      return
    }

    closeList()
    paragraphLines.push(formatInlineMarkdown(line))
  })

  flushParagraph()
  closeList()

  return htmlParts.join('')
}
