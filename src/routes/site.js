const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');



// Final
router.use('/', siteController.home);

module.exports = router;