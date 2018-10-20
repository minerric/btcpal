var express = require('express');
var router = express.Router();
const userController = require('../controllers/users');
var validator = require("email-validator");


/* GET users listing. */
router.post('/', function(req, res, next) {

  const email = req.body;

  const validEmail = validator.va
    if (!validEmail) {

    res.status(400).send('Invalid Request');
  }

  userController.insert()
});

module.exports = router;
