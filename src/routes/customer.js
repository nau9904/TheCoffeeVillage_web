const express = require('express');
const router = express.Router();

const customerController = require('../app/controllers/CustomerController');

router.get('/login', customerController.login);
router.get('/signin', customerController.sigin)
router.get('/shopowner', customerController.owner)



module.exports = router;