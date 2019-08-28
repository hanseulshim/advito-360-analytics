import AWS from 'aws-sdk'
import { EmailTemplate } from '../models'
import { EMAIL_SENDER, EMAIL_BCC, ADVITO_AIR_APPLICATION } from '../config'
const ses = new AWS.SES({
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION
})

export const sendEmail = async (templateName, recipient, placeholders) => {
  const { emailSubject, emailBody } = await EmailTemplate.query().where('templateName', templateName).where('advitoApplicationId', ADVITO_AIR_APPLICATION).first()
  let message = emailBody
  Object.keys(placeholders).forEach(key => {
    const regex = new RegExp(String.raw`\[\[${key}]]`, 'g')
    message = message.replace(regex, placeholders[key])
  })
  const params = {
    Source: EMAIL_SENDER,
    Destination: {
      ToAddresses: [recipient],
      BccAddresses: EMAIL_BCC
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: message
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: emailSubject
      }
    }
  }

  await ses.sendEmail(params).promise()
}
