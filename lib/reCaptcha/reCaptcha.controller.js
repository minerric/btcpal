const url = ' https://www.google.com/recaptcha/api/siteverify';

const fetch = require('fetch');

const secret = process.env.RECAPTCHA_SECRET;
const checkStatus = require('../utils').checkStatus;

module.exports = {
    /*

        @param response The value of 'g-recaptcha-response'.
        @returns Promise
     */
    verifyCaptcha: (response) => {
        return fetch(url, {
            method: 'post',
            body: JSON.stringify({
                response,
                secret,
                // remoteip: optional The end user's ip address.
            }).then(checkStatus)
                .then(response => response.json())
                .then(result => {
                    console.log('captca result', result);
                    return result.success;
                }).catch(err => {
                    console.error(err);
                    return false;
                })
        })
    }
};

