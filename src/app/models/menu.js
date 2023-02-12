const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MenuSchema = new Schema({
    name: String,
    type: String,
    prices: Number,
    image: String,
    details: String,
    slug: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;