const express = require('express');
const router = express.Router();

const menuController = require('../app/controllers/MenuController');



// Final
router.use('/', menuController.menu);

module.exports = router;