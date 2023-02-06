const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    customerName: String,
    order_menu: String,
    type: String,
    prices: Number,
    details: String,
    order_time: String,
    quantity: Number,
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;