const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'danygs@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know ho you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'danygs@gmail.com',
    subject: 'Task manager service cancelation confirmation',
    text: `${name}, we are sorry you canceled you task-manager app account.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}