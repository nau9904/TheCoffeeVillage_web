const siteRoute = require('./site');
const meRoute = require('./me');
const aboutRoute = require('./about');
const menuRoute = require('./menus');
const storeRoute = require('./store');
const orderRoute = require('./orders');
const customerRoute = require('./customer');


function route(app) {
    
    app.use('/about', aboutRoute);

    app.use('/me', meRoute);
    
    app.use('/menu', menuRoute);
    
    app.use('/store', storeRoute);
    
    app.use('/order', orderRoute);

    app.use('/customers', customerRoute);




    app.use('/', siteRoute);
}

module.exports = route;