
export const storeUser = (token, role) => {
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('role', role)
}

export const isLoggedIn = () => {
  const token = window.localStorage.getItem('token') || ''
  const role = window.localStorage.getItem('role') || ''

  return token && role ? true : false
}

export const logout = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('role')
}
