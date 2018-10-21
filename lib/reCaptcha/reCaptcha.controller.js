const url = ' https://www.google.com/recaptcha/api/siteverify';

const fetch = require('node-fetch');

const secret = process.env.RECAPTCHA_SECRET;
const checkStatus = require('../utils').checkStatus;

module.exports = {
    /*

        @param response The value of 'g-recaptcha-response'.
        @returns Promise
     */
    verifyCaptcha: async (response) => {

        const options = {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                response,
                secret,
                // remoteip: optional The end user's ip address.
            })
        };

        return fetch(url, options).then(checkStatus)
            .then(response => response.json())
            .then(result => {
                console.log('captca result', result);
                return result.success;
            }).catch(err => {
                console.error(err);
                return false;
            })
    }
};

