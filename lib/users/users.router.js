const {verifyCaptcha} = require("../reCaptcha/reCaptcha.controller");

var express = require('express');
var router = express.Router();
var validator = require("email-validator");
const userController = require('./users.controller');
const emailHandler = require('../email/email.eventHandler');

/* POST insert user into db. */
router.post('/', async function (req, res) {

    const {email, message = '', phone = '', name = '', website = '', recaptcha = '', subject = ''} = req.body;

    if (!(validator.validate(email) && recaptcha)) {

        return res.status(400).send('Invalid Request');
    }

    const success = await verifyCaptcha(recaptcha).catch(e => {
        console.error(e);
        return false;
    });

    if (!success) {

        return res.status(400).send('Invalid Request');
    }

    const _user = {email, message, phone, name, website, subject};
    return userController.insert(_user)
        .then(result => {

            emailHandler.emit('USER_REGISTRATION', email);
            return res.status(200).json({
                success: true,
                result,
                email,
                message,
            });
        })
        .catch(err => {
            return res.status(500).send(err);
        });


});

module.exports = router;
