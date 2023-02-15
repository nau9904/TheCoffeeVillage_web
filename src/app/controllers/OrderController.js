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

    //[DELETE] /order/:id
    delete(req, res, next) {
        Order.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new OrderController;