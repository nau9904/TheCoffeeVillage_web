const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    name: {type: String},
    type: {type: String},
    image: {type: String},
    prices: {type: String},
    details: {type: String},
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;