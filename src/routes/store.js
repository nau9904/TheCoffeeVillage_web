const express = require('express');
const router = express.Router();

const storeController = require('../app/controllers/StoreController');



// Final
router.get('/', storeController.store);

module.exports = router;