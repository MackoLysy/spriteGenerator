const express = require('express');

const gameController = require('../controlles/gameController');

let router = express.Router();
router.post('/add', gameController.add);

router.get('/', gameController.getAll);


module.exports = router;