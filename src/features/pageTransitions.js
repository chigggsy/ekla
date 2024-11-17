import barba from '@barba/core'
import gsap from 'gsap'
import SplitType from 'split-type'

import pageAbout from '../pages/page_about'
import pageContact from '../pages/page_contact'
import pageHome from '../pages/page_home'
import pageWork from '../pages/page_work'

function pageTransitions() {
  console.log('Page Transitions - Loaded 14:52')

  gsap.to('.loader', {
    height: '0%',
    top: 0,
    duration: 1,
    ease: 'power3.inOut',
  })

  barba.init({
    transitions: [
      {
        name: 'swipe-transition',
        leave(data) {
          console.log(data)
          gsap.set('.loader', { bottom: 0, top: 'auto' })
          return gsap.fromTo(
            '.loader',
            {
              height: '0%',
            },
            { height: '100%', duration: 0.75, ease: 'power3.in' }
          )
        },
        enter(data) {
          data.current.container.remove()

          const timeline = gsap.timeline()

          timeline.fromTo(
            '.loader',
            { bottom: 0, height: '100vh' },
            {
              bottom: '100%',
              duration: 1,
              ease: 'power3.out',
            },
            0.3
          )

          if (data.next.namespace === 'work') {
            gsap.set('.film-details p, .film-credits-header p', {
              fontKerning: 'none',
            })

            const text = new SplitType(
              '.film-details p, .film-credits-header p',
              {
                types: ['lines', 'words'],
              }
            )

            text.lines.forEach((line) => {
              const wrapper = document.createElement('div')
              wrapper.style.overflow = 'hidden'
              line.parentNode.insertBefore(wrapper, line)
              wrapper.appendChild(line)
            })

            timeline
              .from(
                '.film-thumbnail img',
                {
                  opacity: 0,
                  stagger: 0.2,
                  duration: 1,
                  ease: 'none',
                },
                0.5
              )
              .from(
                text.lines,
                {
                  y: '100%',
                  duration: 1.5,
                  ease: 'power3.inOut',
                  stagger: 0.05,
                  onComplete: () => {
                    text.revert()
                  },
                },
                0.5
              )
              .from(
                '.icon-accordion',
                {
                  opacity: 0,
                  duration: 1.5,
                  ease: 'power3.inOut',
                  stagger: 0.1,
                },
                0.75
              )
          }

          if (data.next.namespace === 'about') {
            gsap.set('.about-description p', { fontKerning: 'none' })

            const text = new SplitType('.about-description p', {
              types: ['lines', 'words'],
            })

            text.lines.forEach((line) => {
              const wrapper = document.createElement('div')
              wrapper.style.overflow = 'hidden'
              line.parentNode.insertBefore(wrapper, line)
              wrapper.appendChild(line)
            })

            timeline
              .fromTo(
                '.about-image',
                {
                  opacity: 0,
                  clipPath: 'inset(100% 0 0 0 round 0.25rem)',
                },
                {
                  opacity: 1,
                  clipPath: 'inset(0% 0 0 0 round 0.25rem)',
                  duration: 1.5,
                  ease: 'power3.inOut',
                },
                0.5
              )
              .from(
                text.lines,
                {
                  y: '100%',
                  duration: 1.5,
                  ease: 'power3.inOut',
                  stagger: 0.1,
                  onComplete: () => {
                    text.revert()
                  },
                },
                0.6
              )
          }

          return timeline
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
