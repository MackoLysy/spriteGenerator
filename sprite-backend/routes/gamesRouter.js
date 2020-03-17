const express = require('express');

const gameController = require('../controlles/gameController');

let router = express.Router();

router.get('/', gameController.getAll);
router.get('/add', gameController.add);

module.exports = router;