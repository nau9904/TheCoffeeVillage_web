
class CustomerController {

    //[GET] /Customer/login
    login(req, res, next) {
        res.render('customers/login');
    }

    //[GET] /customer/sigin
    sigin(req, res, next) {
        res.render('customers/sigin');
    }

    //[GET] /customer/shopowner
    owner(req, res, next) {
        res.render('customers/shopowner');
    }
}

module.exports = new CustomerController;