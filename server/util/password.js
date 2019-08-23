import crypto from 'crypto'
import { SESSION, RECOVERY } from '../constants'

export const saltHash = (password, salt = null) => {
  const saltHashed = salt || crypto.randomBytes(16).toString('base64')
  const passwordHashed = crypto.createHash('sha256')
    .update(password)
    .update(saltHashed, 'base64')
    .digest('base64')
  return {
    saltHashed,
    passwordHashed
  }
}

export const generateAccessToken = (prefix = '') => prefix + crypto.randomBytes(16).toString('hex')

export const getExpirationDate = (type) => {
  const expirationDate = new Date()
  if (type === SESSION) {
    expirationDate.setHours(expirationDate.getHours() + 1)
  } else if (type === RECOVERY) {
    expirationDate.setHours(expirationDate.getHours() + 24)
  }
  return new Date(expirationDate)
}

export const checkValidPassword = (password) => {
  const errorMessages = []
  if (password.length < 8) errorMessages.push('Password must be at least 8 characters long.')
  if (!/\d/g.test(password)) errorMessages.push('Password must have at least one number.')
  if (!/[a-z]/g.test(password)) errorMessages.push('Password must have at least one lowercase letter.')
  if (!/[A-Z]/g.test(password)) errorMessages.push('Password must have at least one uppercase letter.')
  // if (!/\.|\,|\?|\/|!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\+|\=|\||\~/g.test(password)) errorMessages.push('Password must have at least one special character.') // eslint-disable-line
  if (/\s/g.test(password)) errorMessages.push('Password cannot have spaces or other whitespace.')
  return errorMessages
}
