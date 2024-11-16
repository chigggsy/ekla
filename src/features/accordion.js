function accordion() {
  console.log('Accordion - Loaded')

  const accordionList = document.querySelectorAll('.film-credits-header')
  const creditList = document.querySelectorAll('.film-credits-item')

  accordionList.forEach((accordionItem) => {
    accordionItem.addEventListener('mouseenter', handleHeaderHover)
    accordionItem.addEventListener('mouseleave', handleHeaderHover)
    accordionItem.addEventListener('click', handleHeaderClick)
  })

  creditList.forEach((creditItem) => {
    creditItem.addEventListener('mouseenter', handleCreditHover)
    creditItem.addEventListener('mouseleave', handleCreditHover)
  })

  function handleHeaderHover(event) {
    const accordionIcon = event.currentTarget.querySelector('.icon-accordion')
    accordionIcon.classList.toggle('u-rotate-90')
  }

  function handleHeaderClick(event) {
    const accordionDetails = event.currentTarget.nextElementSibling
    const accordionTitle = event.currentTarget.children[1]
    const accordionIconPath = event.currentTarget.querySelector(
      '.icon-accordion path'
    )
    accordionDetails.classList.toggle('is-open')
    accordionTitle.innerText =
      accordionTitle.innerText === 'SHOW CREDITS'
        ? 'HIDE CREDITS'
        : 'SHOW CREDITS'
    accordionIconPath.classList.toggle('u-rotate-90')
  }

  function handleCreditHover(event) {
    const creditLine = event.currentTarget.querySelector('.film-credits-line')
    creditLine.classList.toggle('is-active')
  }
}

export default accordion
