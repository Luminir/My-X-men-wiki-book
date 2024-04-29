const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

// [GET] /me/......(mấy thằng get dưới)
router.get('/stored/characters', meController.storedCharacters);
router.get('/deleted/characters', meController.deletedCharacters);

module.exports = router;
