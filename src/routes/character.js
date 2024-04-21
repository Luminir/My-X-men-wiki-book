const express = require('express');
const router = express.Router();

const characterController = require('../app/controllers/CharacterController');

router.get('/create', characterController.create);
router.post('/store', characterController.store);
router.get('/:slug', characterController.show);
// router.get('/', newsController.index);

module.exports = router;
