
class AboutController {

    //[GET] /about
    about(req, res) {
        res.render('about');
    }
}

module.exports = new AboutController;