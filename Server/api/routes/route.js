const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.all)
router.post('/', controller.create);
router.get('/:id', controller.showByid);

module.exports = router;
