mixin('regex', ['selector', 'regex', 'rule'],
  returnValue('Array.from(document.querySelectorAll(selector))',
    filterFunc('new RegExp(regex).test(tag.textContent)',
      reduceFunc(
        createAttribute(['selector'],
          addAttribute('tag', 'regex',
            addRule('', '', 'regex')))))))
