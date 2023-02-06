
class StoreController {

    //[GET] /about
    store(req, res) {
        res.render('store');
    }
}

module.exports = new StoreController;