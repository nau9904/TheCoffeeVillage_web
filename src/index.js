'use strict';

const path = require('path');
const express = require('express');
var methodOverride = require('method-override');
const morgan = require('morgan')
const handlebars  = require('express-handlebars');
const { extname } = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 3300;
const bodyParser = require('body-parser');

const route = require('./routes');
const db = require('./config/db');


// Morgan
// app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))

// Rendering engine setup
app.engine('.hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Database connect
db.connect();


// Routes init
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
