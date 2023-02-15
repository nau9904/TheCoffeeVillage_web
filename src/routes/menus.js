const express = require('express');
const router = express.Router();

const menuController = require('../app/controllers/MenuController');


router.get('/addmenu', menuController.addmenu);
router.post('/store', menuController.store);
router.get('/:name', menuController.showDetail);
router.get('/:id/edit', menuController.edit);
router.post('/:id', menuController.order);
router.put('/:id', menuController.update);
router.delete('/:id', menuController.delete);

// Final
router.get('/', menuController.menu);

module.exports = router;