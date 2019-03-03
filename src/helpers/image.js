/**
 * Returns the height and width of an image from a URL.
 * @param {String} url Url of the image.
 * @returns {Object} Returns an object with the width
 * and height of the image.
 */
export const getMeta = (url) => {
  var img = new Image()
  img.src = url

  return {
    w: img.naturalWidth,
    h: img.naturalHeight
  }
}
