const { json } = require('express');
const Menu = require('../models/menu');


class OrderController {

    //[GET] /order
    order(req, res, next) {
        Menu.find({})
            .then(menus => {
                menus = menus.map(menu => menu.toObject())
                res.render('order', { menus })
            })
            .catch(next);
    }
}

module.exports = new OrderController;