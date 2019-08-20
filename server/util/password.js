import crypto from 'crypto'

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
