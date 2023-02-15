const { json } = require('express');
const Menu = require('../models/menu');
const Order = require('../models/csOrder');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const bodyParser = require('body-parser');

class MenuController {

    //[GET] /menu
    menu(req, res, next) {
        Menu.find({})
            .then(menus => {
                res.render('menu', {
                    menus: mutipleMongooseToObject(menus)
                })
            })
            .catch(next);
    } 

     //[GET] /menu/:slug
     showDetail(req, res, next) {
        Menu.findOne({ name: req.params.name })
            .then(menus => {
                res.render('menus/showDetails', { 
                    menus: mongooseToObject(menus)
                 })
            })
            .catch(next);
     }


    //[GET] /menu/addmenu
    addmenu(req, res, next) {
        res.render('menus/addMenu')
    }

    //[GET] /menus/:id/edit
    edit(req, res, next) {
        Menu.findById(req.params.id)
            .then(menus => {
                res.render('menus/edit', {
                    menus: mongooseToObject(menus)
                })
            })
            .catch(next)
        
    }

    //[PUT] /menu/:id/edit
    update(req, res, next) {
        Menu.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored'))
            .catch(next)
    }

    //[DELETE] /menu/:id
    delete(req, res, next) {
        Menu.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //[POST] /menu/store
    store(req, res, next) {
        Menu.create(req.body)
            .then(res.redirect('/menu'))
            .catch(next)
    }
    //[POST] /menu/:id
    
    order(req, res, next) {
        Menu.findById({_id: req.params.id})
            .then((menus) => {
                Order.create(
                    {name: menus.name ,
                    type: menus.type,
                    image: menus.image,
                    prices: menus.prices,
                    details: menus.details}
                )
                    .then(() => {
                        res.redirect('back')
                    })
                    .catch(next)
            })
            .catch(next)
    }

}
 
module.exports = new MenuController;