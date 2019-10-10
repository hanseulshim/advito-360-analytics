export const EMAIL_SENDER = 'IandA@advito.com'
export const EMAIL_BCC = ['ianda@advito.com', 'hshim@boostlabs.com']
export const EMAIL_OPTIONS = {
  AIR: {
    id: 2,
    url:
      'https://a3-prod1.s3.us-east-2.amazonaws.com/index.html#/resetpassword?t=',
    templateName: 'Password Air Recovery'
  },
  ANALYTICS: {
    id: 3,
    url: 'http://localhost:3000/#/reset-password?t=',
    templateName: 'Password 360 Analytics Recovery'
  },
  DEFAULT: {
    url: '',
    templateName: ''
  }
}
