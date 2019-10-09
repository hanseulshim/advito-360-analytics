export const getToken = () => {
  if (localStorage.getItem('advito-360-user')) {
    const { sessionToken } = JSON.parse(localStorage.getItem('advito-360-user'))
    return sessionToken
    // @TODO: DELETE GET TOKEN RETURNING HARD-CODED TOKEN
    // } else return 'MY^PR3TTYP0NY'
  } else return ''
}

export const getUser = () => {
  if (localStorage.getItem('advito-360-user')) {
    const user = JSON.parse(localStorage.getItem('advito-360-user'))
    return { ...user }
  } else {
    return {}
  }
}

export const setUser = user => {
  if (localStorage.getItem('advito-360-user')) {
    localStorage.removeItem('advito-360-user')
  }
  localStorage.setItem('advito-360-user', JSON.stringify(user))
}

export const removeUser = () => {
  localStorage.removeItem('advito-360-user')
  window.location.href = '/#/login'
}
