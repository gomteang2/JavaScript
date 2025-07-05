const colorThemes = {
 black: ['var(--black-100)', 'var(--black-200)', 'var(--black-300)', 'var(--black-400)', 'var(--black-500)', 'var(--black)'],
 white: ['var(--white-100)', 'var(--white-200)', 'var(--white-300)', 'var(--white-400)', 'var(--white-500)', 'var(--white)'],
 stone: ['var(--stone-100)', 'var(--stone-200)', 'var(--stone-300)', 'var(--stone-400)', 'var(--stone-500)', 'var(--stone)'],
 red: ['var(--red-100)', 'var(--red-200)', 'var(--red-300)', 'var(--red-400)', 'var(--red-500)', 'var(--red)'],
 orange: ['var(--orange-100)', 'var(--orange-200)', 'var(--orange-300)', 'var(--orange-400)', 'var(--orange-500)', 'var(--orange)'],
 brown: ['var(--brown-100)', 'var(--brown-200)', 'var(--brown-300)', 'var(--brown-400)', 'var(--brown-500)', 'var(--brown)'],
 yellow: ['var(--yellow-100)', 'var(--yellow-200)', 'var(--yellow-300)', 'var(--yellow-400)', 'var(--yellow-500)', 'var(--yellow)'],
 beige: ['var(--beige-100)', 'var(--beige-200)', 'var(--beige-300)', 'var(--beige-400)', 'var(--beige-500)', 'var(--beige)']
}

function animateColors(elements, themeName, interval = 1000) {
  const colors = colorThemes[themeName]

  const reversedColors = [...colors].slice(0, -1).reverse()
  const fullColorSteps = [...reversedColors, colors.at(-1)]

  const elArray = Array.isArray(elements) || elements instanceof NodeList
    ? Array.from(elements)
    : [elements]

  fullColorSteps.forEach((color, i) => {
    setTimeout(() => {
      elArray.forEach(el => {
        if (el.classList.contains('oval')) {
          el.style.borderColor = color
        } else if (el instanceof HTMLElement && !(el instanceof SVGElement)) {
          el.style.backgroundColor = color
        } else if (el instanceof SVGElement) {
          const path = el.querySelector('path')
          if (path) path.setAttribute('fill', color)
        }
      })
    }, i * interval)
  })
}

const yellows = document.querySelectorAll('.circle-01, .half-03')
const oranges = document.querySelectorAll('.quarter-01, .half-02, .shape-03')
const brown = document.querySelectorAll('.quarter-02')
const reds = document.querySelectorAll('.oval, .circle-02, .circle-03, .circle-04, .half-01, .shape-02')
const blacks = document.querySelectorAll('.quarter-03, .quarter-04')
const beige = document.querySelectorAll('.quarter-05')
const stone = document.querySelectorAll('.shape-01')

const tl1 = gsap.timeline({
  id: 'graphics animation',
  defaults: { opacity: 0, ease: 'back.out(1.5)' },
})

tl1
.from('.graphics', { ease: 'linear', autoAlpha: 0})
.from('.line-01, .line-03', { x: 50, duration: 1 })
.from('.line-02', { x: -50, duration: 1 }, '-=0.5')
.from('.line-left, .line-right', { y: 50, duration: 1 }, '-=0.5')
.from('.line-center', { y: -50, duration: 1 }, '-=0.5')
.from('.quarter-01', { rotation: 360, transformOrigin: 'right bottom', duration: 2, yoyo: true}, '-=0.5')
.from('.quarter-02, .quarter-04, .quarter-05', { rotation: 360, transformOrigin: 'right top', duration: 2, yoyo: true}, '-=0.5')
.from('.quarter-03', { rotation: 360, transformOrigin: 'left bottom', duration: 2, yoyo: true}, '-=0.5')
.from('.oval, .shape', {scale: 2, transformOrigin: 'center'}, '-=0.5')
.from('.circle', { scale: 1.5, duration: 2, yoyo: true , transformOrigin: 'center center', stagger: 0.1}, '-=0.5')
.from('.half', {scale: 1.5, rotation: 360, transformOrigin: 'center', duration: 2, yoyo: true, stagger: 0.1}, '-=0.5')
.from('.image', {scale:4, transformOrigin: 'center', duration: 2, yoyo: true}, '-=0.5')
.call(() => {
  animateColors(document.querySelectorAll('.circle-01, .half-03'), 'yellow')
  animateColors(document.querySelectorAll('.quarter-01, .half-02, .shape-03'), 'orange')
  animateColors(document.querySelectorAll('.quarter-02'), 'brown')
  animateColors(document.querySelectorAll('.oval, .circle-02, .circle-03, .circle-04, .half-01, .shape-02'), 'red')
  animateColors(document.querySelectorAll('.quarter-03, .quarter-04'), 'black')
  animateColors(document.querySelectorAll('.quarter-05'), 'beige')
  animateColors(document.querySelectorAll('.shape-01'), 'stone')
})

const tl2 = gsap.timeline({
  id: 'contents animation',
  defaults: { opacity: 0, ease: 'back.out(1.5)' },
})

tl2
.from('.contents', { ease: 'linear', autoAlpha: 0})
.from('.like-lion', { x: -80, duration: 1 })
.from('.big :first-child', { fontWeight: 700, duration: 1 }, '-=0.5')
.from('.big :nth-child(2)', { fontWeight: 700, duration: 1 }, '-=0.5')
.from('.big :last-child', { fontWeight: 700, duration: 1 }, '-=0.5')
.from('.text', { y: 50, daration: 2 }, '-=0.5')
.from('.frontend', { y: 50, duration: 2}, '-=0.5')
.from('.curriculum', { y: 50, duration: 2}, '<')


const hoverTargets = document.querySelectorAll(
    '.circle, .half, .quarter, .oval, .shape, .image'
  )

  hoverTargets.forEach(el => {
    el.style.cursor = 'pointer' 

    el.addEventListener('mouseenter', () => {
      gsap.to(el, {
        scale: 2,
        duration: 0.4,
        ease: 'back.out',
        transformOrigin: 'center center',
      })
    })

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        scale: 1,
        duration: 0.4,
        ease: 'back.out',
        transformOrigin: 'center center',
      })
    })
  })