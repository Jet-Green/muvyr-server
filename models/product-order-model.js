const { Schema, model } = require('mongoose');

/*
date: '15/11/2023',
orderDate: '16/11/2023',
goods: [
    { title: 'Сметана', price: '100 руб', count: 75 },
    { title: 'Сыр мягкий Мувырский', price: '250 руб', count: 200 },
],
packaging: '500 г, 250 г',
shopTitle: 'Карамель',
shopAddress: 'г.Ижевск, ул.Ракетная, 24',
sum: '57500 руб'
*/
const ProductOrderSchema = new Schema({
    date: String,
    orderDate: String,
    goods: Array,
    packaging: String,

    shopTitle: String,
    shopAddress: String,
    sum: Number
})

module.exports = model('ProductOrder', ProductOrderSchema);