'use strict';

require('dotenv').load();

var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
var request = require('supertest');

var app = require('../app');

const should = chai.should;


describe('test()', function () {
    it('get currencies', function (done) {

        request(app)
            .post('/emailer')
            .expect('Content-Type', /json/)
            .expect(200, done)

    });

});
