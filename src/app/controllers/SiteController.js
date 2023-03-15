
class SiteController {

    //[GET] /login
    login(req, res) {
        res.render('customers/login')
    }
    //[GET] /
    home(req, res) {
        res.render('home');
    }
}

module.exports = new SiteController;