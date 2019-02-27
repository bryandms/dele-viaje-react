import animateScrollTo from 'animated-scroll-to'

/**
 * Scroll to the element.
 * @param {String} element Target element.
 */
const scrollTo = (element) => {
  animateScrollTo(document.querySelector(element))
}

export default scrollTo
