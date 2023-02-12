const { json } = require('express');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const Order = require('../models/csOrder');


class OrderController {

    //[GET] /order
    order(req, res, next) {
        Order.find({})
            .then((orders) => {
                res.render('order',{
                    orders: mutipleMongooseToObject(orders)
                })
            })
            .catch(next)
    }
}

module.exports = new OrderController;