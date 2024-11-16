import gsap from 'gsap'

function imageFollowCursor() {
  console.log('Image Follow Cursor - Loaded')

  function handleImageFollow(event) {
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const cursorX = event.clientX
    const cursorY = event.clientY

    // mapRange(inputMin, inputMax, outputMin, outputMax, value)
    const moveX = gsap.utils.mapRange(0, viewportWidth, -140, 140, cursorX)
    const moveY = gsap.utils.mapRange(0, viewportHeight, -80, 80, cursorY)

    gsap.to('.about-image', {
      x: moveX,
      y: moveY,
      duration: 1.5,
      ease: 'power3.out',
    })
  }

  window.addEventListener('mousemove', handleImageFollow)
}

export default imageFollowCursor
