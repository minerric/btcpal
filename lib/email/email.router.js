var express = require('express');
var router = express.Router();
const {send} = require('./emailer.js');


/* GET users listing. */
router.post('/', function (req, res, next) {

    const email = req.body.email;
    const options = {
        to: process.env.GMAIL_USER,
        subject: `register from ${email}`,
        text: `email: ${email} \n date: ${new Date().toLocaleString()}`
    };

    console.log('options', options);

    const ex = {
        "msg": {
            "to": "jchimien@gmail.com",
            "subject": "register from jchimien@gmail.com",
            "text": "email: jchimien@gmail.com \n date: 10/18/2018, 4:28:38 PM"
        },
        "result": {
            "accepted": [
                "jchimien@gmail.com"
            ],
            "rejected": [],
            "envelopeTime": 255,
            "messageTime": 1031,
            "messageSize": 336,
            "response": "250 2.0.0 OK 1539894520 g73-v6sm1051840itg.37 - gsmtp",
            "envelope": {
                "from": "jchimien@gmail.com",
                "to": [
                    "jchimien@gmail.com"
                ]
            },
            "messageId": "<5f0cd06f-92a9-c477-a76f-478fe1139e42@gmail.com>"
        }
    };

    send(options);
    res.status(200).json({
        msg: options,
    });

});


module.exports = router;
