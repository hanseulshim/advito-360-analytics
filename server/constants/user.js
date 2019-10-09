export const Login = `displayName
        clientId
        profilePicturePath
        sessionToken
        roleIds`

export const User = `id
        clientId
        username
        nameLast
        nameFirst
        isEnabled
        email
        phone
        profilePicturePath
        defaultTimezone
        defaultLanguage
        defaultDateFormat
        address
        roleIds`

export const SESSION = 'SESSION'
export const RECOVERY = 'RECOVERY'
export const IA_ROLES = [4, 5, 6]
export const AIR_ID = 2
export const ANALYTICS_ID = 3

export const EMAIL_OPTIONS = {
  AIR: {
    id: 2,
    url:
      'https://a3-prod1.s3.us-east-2.amazonaws.com/index.html#/resetpassword?t=',
    templateName: 'Password Air Recovery'
  },
  ANALYTICS: {
    id: 3,
    url: 'http://localhost:3000/#/resetpassword?t=',
    templateName: 'Password 360 Analytics Recovery'
  },
  DEFAULT: {
    url: '',
    templateName: ''
  }
}
