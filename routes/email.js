var express = require('express');
var router = express.Router();
const sendEmail = require('../emailer.js').send;

/* GET users listing. */
router.post('/', function (req, res, next) {

    const email = req.param('email');
    const email_ = req.body.email;
    const options = {
        to: email,
        emailParams: email,
        body: req.body,
        emailBody: email_,
        subject: `register from ${email}`,
        text: `email: ${email} \n date: ${new Date().toLocaleString()}`
    };


    //sendEmail(options);
    console.log('options', options);
    res.status(200).json(options);
});

module.exports = router;
