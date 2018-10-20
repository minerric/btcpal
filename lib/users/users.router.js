var express = require('express');
var router = express.Router();
var validator = require("email-validator");
const controller = require('./users.controller');

/* GET users listing. */
router.post('/', async function (req, res) {

    const {email, message = ''} = req.body;

    const validEmail = validator.validate(email);

    if (!validEmail) {

        res.status(400).send('Invalid Request');
    }

    const result = await controller.insert({email, message, at: new Date().toLocaleString()}).catch(err => {
        res.status(500).send(err);
    });

    const status = `We will contact you shortly`;
    res.status(200).json({
        success: true,
        email,
        message,
        status,
    });
});

module.exports = router;
