require('dotenv').load();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});


const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

function send({to = 'jchimien@gmail.com', subject = 'testing', text = 'this is a test message'} = {}) {

    return new Promise((resolve, reject) => {

        console.log('will send email to %f text: %f', to, text);
        const options = Object.assign({}, mailOptions, {to, subject, text});
        transporter.sendMail(options, function (err, data) {

            if (err) {
                return reject(err);
            }
            resolve(data);
        })
    })
}

module.exports = {
    send,
}
