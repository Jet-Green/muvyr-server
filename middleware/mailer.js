const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'qbit.mailing@gmail.com',
        pass: 'tepsqmfkghmfqfyg'
    }
}, { from: 'Григорий Дзюин <qbit.mailing@gmail.com>' })

module.exports = {
    async sendMail(html, emails = [], emailSubject) {
        let details = {
            from: 'qbit.mailing@gmail.com',
            to: [...emails],
            subject: emailSubject,
            html: html,
        }
        let r = await transporter.sendMail(details)
    }
}