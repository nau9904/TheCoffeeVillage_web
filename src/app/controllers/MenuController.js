const { json } = require('express');
const Menu = require('../models/menu');
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

    //[GET] /menu/store
    store(req, res, next) {
        console.log(req.body)
        Menu.create(req.body)
            .then(res.redirect('/'))
    }
}
 
module.exports = new MenuController;