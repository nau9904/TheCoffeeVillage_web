'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const { extname } = require('path');
const mongoose = require('mongoose');
const Menu = require('./models/menu');
const User = require('./models/user');
const app = express();
const port = 3300;

const route = require('./routes');


// Morgan
// app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

// Rendering engine setup
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Database connect
mongoose.connect('mongodb://localhost:27017/villagecoffeDB', {useNewUrlParser: true});

// app.get('/order', (req, res) => {
//   Menu.find({}, function(error, menu) {
//     console.log(menu);
//     res.render('order', {
//       menus: menu
//     });
//   });
// });


// Routes init
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
