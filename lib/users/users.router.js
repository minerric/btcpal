const {verifyCaptcha}  = require("../reCaptcha/reCaptcha.controller");

var express = require('express');
var router = express.Router();
var validator = require("email-validator");
const userController = require('./users.controller');

/* GET users listing. */
router.post('/', async function (req, res) {

    const {email, message = '', phone = '', name = '', website = ''} = req.body;

    const captcha = req.body['g-recaptcha-response'];


    const validEmail = validator.validate(email);

    if (!(validEmail && captcha)) {

        return res.status(400).send('Invalid Request');
    }

    const success = await verifyCaptcha(captcha).catch(e => false);

    if (!success) {

        return res.status(400).send('Invalid Request');
    }

    return userController.insert({email, message, phone, name, website})
        .then(result => {

            const status = `We will contact you shortly`;
            return res.status(200).json({
                success: true,
                result,
                email,
                message,
                status,
            });
        })
        .catch(err => {
            return res.status(500).send(err);
        });


});

module.exports = router;
