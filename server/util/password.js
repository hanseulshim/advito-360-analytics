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
