const { json } = require('express');
const Menu = require('../models/menu');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');
const bodyParser = require('body-parser');

class MeController {
    //[GET] /me/stored/menu
    storedMenu(req, res, next) {
        Menu.find({})
            .then(menus => {
                res.render('me/stored-menu', {
                    menus: mutipleMongooseToObject(menus)
                })
            })
            .catch(next)
    }

}
 
module.exports = new MeController;