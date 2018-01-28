export default (selector, regex, rule) => {

  let styles = ''
  let count = 0

  Array.from(document.querySelectorAll(selector))
    .filter(tag => regex.test(tag.textContent))
    .forEach(tag => {

      const attr = (selector+regex).replace(/\W/g, '')

      tag.setAttribute(`data-regex-${attr}`, count)
      styles += `[data-regex-${attr}="${count}"] { ${rule} }\n`
      count++

    })

  return styles

}