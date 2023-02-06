const express = require('express');
const router = express.Router();

const menuController = require('../app/controllers/MenuController');


router.get('/addmenu', menuController.addmenu);
router.post('/store', menuController.store);
router.get('/:name', menuController.showDetail);

// Final
router.get('/', menuController.menu);

module.exports = router;