import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

import ruby from 'highlight.js/lib/languages/ruby'
hljs.registerLanguage('ruby', ruby);

import erb from 'highlight.js/lib/languages/erb'
hljs.registerLanguage('erb', erb);

import bash from 'highlight.js/lib/languages/bash'
hljs.registerLanguage('bash', bash);

import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript);

document.addEventListener('turbolinks:load', (event) => {
  document.querySelectorAll('pre').forEach((block) => {
    hljs.highlightBlock(block)
  })
})
