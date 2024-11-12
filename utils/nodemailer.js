const nodemailer = require('nodemailer');
const ErrorHandler = require('./ErrorHandler');

exports.sendmail = (req, res, next, url) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port:465,
        auth:{
            user:process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
}


const mailOptions = {
    from
}