function nav() {
  const el_navMenuBtn = document.querySelector('.nav .button.is-nav-mbl')
  const el_mblNav = document.querySelector('.nav-item-list-mbl')
  const el_body = document.querySelector('body')

  el_navMenuBtn.addEventListener('click', () => {
    el_mblNav.classList.toggle('is-open')
    el_body.classList.toggle('u-prevent-scroll')
    el_navMenuBtn.innerText =
      el_navMenuBtn.innerText === 'MENU' ? 'CLOSE' : 'MENU'
  })
}

export default nav
