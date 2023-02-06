
class MenuController {

    //[GET] /about
    menu(req, res) {
        res.render('menu');
    }
}

module.exports = new MenuController;