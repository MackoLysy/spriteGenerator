const express = require('express');

const spriteController = require('../controlles/spriteController');


let router = express.Router();

router.post('/upload', spriteController.upload);

module.exports = router;