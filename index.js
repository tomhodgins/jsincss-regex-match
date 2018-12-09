module.exports = (selector, regex, rule) => {

  return Array.from(document.querySelectorAll(selector))

    .filter(tag => new RegExp(regex).test(tag.textContent))

    .reduce((styles, tag, count) => {

      const attr = selector.replace(/\W/g, '')

      tag.setAttribute(`data-regex-${attr}`, count)
      styles += `[data-regex-${attr}="${count}"] { ${rule} }\n`
      return styles

    }, '')

}
