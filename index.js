module.exports = (selector, regex, rule) => {
  const attr = (selector + regex).replace(/\W/g, '')
  const result = Array.from(document.querySelectorAll(selector))
    .filter(tag => new RegExp(regex).test(tag.textContent))
    .reduce((output, tag, count) => {
      output.add.push({tag: tag, count: count})
      output.styles.push(`[data-regex-${attr}="${count}"] { ${rule} }`)
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-regex-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-regex-${attr}`, ''))
  return result.styles.join('\n')  
}
