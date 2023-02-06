const express = require('express');
const router = express.Router();

const orderController = require('../app/controllers/OrderController');



// Final
router.use('/', orderController.order);

module.exports = router;