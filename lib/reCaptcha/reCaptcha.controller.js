const url = ' https://www.google.com/recaptcha/api/siteverify';

const fetch = require('node-fetch');

const { URLSearchParams } = require('url');




const secret = process.env.RECAPTCHA_SECRET;

if (!secret) {

    throw new Error('MISSING process.env.RECAPTCHA_SECRET');
}

const checkStatus = require('../utils').checkStatus;

module.exports = {
    /*

        @param response The value of 'g-recaptcha-response'.
        @returns Promise
     */
    verifyCaptcha: async (response) => {

        const params = new URLSearchParams();

        params.append('response', response);
        params.append('secret', secret);

        const options = {
            method: 'post',
            body: params,
        };
        console.log('opt', options);

        return fetch(url, options)
            .then(checkStatus)
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

