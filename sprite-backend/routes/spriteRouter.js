const express = require('express');

const spriteController = require('../controlles/spriteController');


let router = express.Router();

router.post('/add', spriteController.add);

module.exports = router;