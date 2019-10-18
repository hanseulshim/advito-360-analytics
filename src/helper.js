import history from './history'
import moment from 'moment'

export const formatDate = date => {
  return date ? moment(date).format('MMMM DD, YYYY') : ''
}

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

export const updateUserName = displayName => {
  if (localStorage.getItem('advito-360-user')) {
    const user = JSON.parse(localStorage.getItem('advito-360-user'))
    user.displayName = displayName
    localStorage.setItem('advito-360-user', JSON.stringify(user))
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
  history.push('/login')
}

export const getApi = () => {
  const REACT_APP_STAGE = process.env.REACT_APP_STAGE
  return REACT_APP_STAGE === 'dev'
    ? 'https://lfl1qiymy7.execute-api.us-east-2.amazonaws.com/dev/graphql'
    : REACT_APP_STAGE === 'alpha'
      ? 'https://trfrs1gzn8.execute-api.us-east-2.amazonaws.com/alpha/graphql'
      : REACT_APP_STAGE === 'beta'
        ? 'https://7smhjazdr2.execute-api.us-east-2.amazonaws.com/beta/graphql'
        : REACT_APP_STAGE === 'prod'
          ? 'https://759byqkv94.execute-api.us-east-2.amazonaws.com/prod/graphql'
          : 'http://localhost:4000/graphql'
}
