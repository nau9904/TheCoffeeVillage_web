
class OrderController {

    //[GET] /about
    order(req, res) {
        res.render('order');
    }
}

module.exports = new OrderController;