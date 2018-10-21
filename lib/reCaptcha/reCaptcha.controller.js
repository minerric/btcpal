const url = ' https://www.google.com/recaptcha/api/siteverify';

const fetch = require('whatwg-fetch');

const secret = process.env.RECAPTCHA_SECRET;
const checkStatus = require('../utils').checkStatus;

module.exports = {
    verifyCaptcha: (response) => {
        fetch(url, {
            method: 'post',
            body: JSON.stringify({
                response,
                secret,
            }).then(checkStatus)
                .then(response => response.json())
                .then(result => {
                    return result.success;
                }).catch(err => {
                    console.error(err);
                    return false;
                })
        })
    }
};

