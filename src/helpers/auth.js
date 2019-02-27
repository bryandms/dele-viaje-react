import decode from 'jwt-decode'

/**
 * Verify if a user is authenticated.
 * @returns {Boolean} True if the user
 * is authenticated, false if it is not.
 */
export const isAuth = () => {
  const token = localStorage.getItem('token')
  let isValid = true

  try {
    isValid = decode(token)
  } catch (error) {
    return false
  }

  return isValid
}

/**
 * Verify if the user has the administrator role.
 * @param {Object[]} roles User roles.
 * @returns {Boolean} True if it is administrator,
 * false if it is not.
 */
export const isAdmin = (roles) => {
  return havePermissions(['admin'], roles)
}

/**
 * Verify if the user has the user role.
 * @param {Object[]} roles User roles.
 * @returns {Boolean} True if it is user,
 * false if it is not.
 */
export const isUser = (roles) => {
  return havePermissions(['user'], roles)
}

/**
 * Verify if a user has at least one allowed role.
 * @param {Object[]} allowedRoles Authorized or allowed roles.
 * @param {Object[]} roles User roles.
 * @returns {Boolean} True if it has at least one
 * allowed role, false if it has no allowed roles.
 */
export const havePermissions = (allowedRoles, roles) => {
  for (let i = 0; i < roles.length; i++) {
    let name = roles[i].name
    if (allowedRoles.includes(name))
      return true
  }
  return false
}
