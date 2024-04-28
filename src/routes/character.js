const express = require('express');
const router = express.Router();

const characterController = require('../app/controllers/CharacterController');

// ---- /character/ all router in this .js
router.get('/create', characterController.create);
router.post('/store', characterController.store);
router.get('/:id/edit', characterController.edit);
router.put('/:id', characterController.update);
router.get('/:slug', characterController.show);
// router.get('/', newsController.index);

module.exports = router;
