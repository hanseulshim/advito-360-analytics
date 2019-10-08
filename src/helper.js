export const getToken = () => {
  if (localStorage.getItem('advito-360-user')) {
    const { sessionToken } = JSON.parse(localStorage.getItem('advito-360-user'))
    return sessionToken
  } else return 'MY^PR3TTYP0NY'
}
