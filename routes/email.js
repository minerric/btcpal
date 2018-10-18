var express = require('express');
var router = express.Router();
const sendEmail = require('../emailer.js').send;

/* GET users listing. */
router.post('/', function (req, res, next) {

    const email = req.body.email;
    const options = {
        to: email,
        subject: `register from ${email}`,
        text: `email: ${email} \n date: ${new Date().toLocaleString()}`
    };


    console.log('options', options);
    sendEmail(options).then(result => {

        res.status(200).json(options);
    }).catch(err => {
        res.status(500).json(options);
    })
});

module.exports = router;
