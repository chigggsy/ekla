import barba from '@barba/core'
import gsap from 'gsap'

import pageAbout from '../pages/page_about'
import pageContact from '../pages/page_contact'
import pageHome from '../pages/page_home'
import pageWork from '../pages/page_work'

function pageTransitions() {
  console.log('Page Transitions - Loaded NEW')

  barba.init({
    transitions: [
      {
        name: 'opacity-transition',
        leave(data) {
          return gsap.to(data.current.container, {
            opacity: 0,
          })
        },
        enter(data) {
          data.current.container.remove()
          return gsap.from(data.next.container, {
            opacity: 0,
          })
        },
      },
    ],
    views: [
      {
        namespace: 'home',
        beforeEnter() {
          pageHome()
        },
      },
      {
        namespace: 'work',
        beforeEnter() {
          pageWork()
        },
      },
      {
        namespace: 'about',
        beforeEnter() {
          pageAbout()
        },
      },
      {
        namespace: 'contact',
        beforeEnter() {
          pageContact()
        },
      },
    ],
  })
}

export default pageTransitions
