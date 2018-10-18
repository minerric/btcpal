var express = require('express');
var router = express.Router();
const {send} = require('../emailer.js');

/* GET users listing. */
router.post('/', function (req, res, next) {

    const email = req.body.email;
    const options = {
        to: email,
        subject: `register from ${email}`,
        text: `email: ${email} \n date: ${new Date().toLocaleString()}`
    };


    console.log('options', options);

    send(options).then(result => {

        res.status(200).json({
            msg: options,
            result,
        });
    }).catch(err => {
        res.status(500).json({
            msg: options,
            err,
        });
    })
});

module.exports = router;
