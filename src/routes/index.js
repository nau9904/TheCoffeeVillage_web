const siteRoute = require('./site');
const aboutRoute = require('./about');
const menuRoute = require('./menus');
const storeRoute = require('./store');
const orderRoute = require('./orders');


function route(app) {
    
    app.use('/about', aboutRoute);
    
    app.use('/menu', menuRoute);
    
    app.use('/store', storeRoute);
    
    app.use('/order', orderRoute);



    app.use('/', siteRoute);
}

module.exports = route;