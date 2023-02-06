const express = require('express');
const router = express.Router();

const aboutController = require('../app/controllers/AboutController');



// Final
router.get('/', aboutController.about);

module.exports = router;