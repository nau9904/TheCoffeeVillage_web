const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MenuSchema = new Schema({
    name: String,
    type: String,
    prices: Number,
    details: String,
});

const Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;