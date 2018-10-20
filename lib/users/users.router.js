var express = require('express');
var router = express.Router();
var validator = require("email-validator");
const userController = require('./users.controller');

/* GET users listing. */
router.post('/', async function (req, res) {

    const {email, message = ''} = req.body;

    const validEmail = validator.validate(email);

    if (!validEmail) {

        return res.status(400).send('Invalid Request');
    }

    return userController.insert({email, message, at: new Date().toLocaleString()})
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
