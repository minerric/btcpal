const express = require('express');

const router = express.Router();

const fs = require('fs');

router.post('/:id', (req, res) => {

    console.log('purchase', req.params.id);

    console.log('body', req.body);

    fs.writeFileSync('./data.json', JSON.stringify(req.body));

    res.sendStatus(200);
});
