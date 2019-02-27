import Noty from 'noty'

import '../../node_modules/noty/lib/noty.css'
import '../../node_modules/noty/lib/themes/semanticui.css'

/**
 * Show error notifications.
 * @param {Object[]} errors Errors to show.
 */
export const errorNotification = errors =>
  errors.map(error =>
    noty('error', error.message)
  )

/**
 * Show success notifications.
 * @param {String} text Text to show.
 */
export const successNotification = text =>
  noty('success', text)

/**
 * Show notification.
 * @param {String} type Type of notification.
 * @param {String} text Text to show.
 */
const noty = (type, text) => new Noty({
  type,
  theme: 'semanticui',
  layout: 'topCenter',
  text,
  closeWith: ['click', 'button']
}).show()
