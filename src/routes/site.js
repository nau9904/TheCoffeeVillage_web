const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
const customerController = require('../app/controllers/CustomerController');

router.get('customer/login', customerController.login)

// Final
router.get('/', siteController.home);

module.exports = router;