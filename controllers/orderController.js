const Order = require('../models/Order');
const Product = require('../models/Product');

let orderController = {};

orderController.newOrder = async(req, res, next) => {
    try {
        const { address, city, state, zip, country, cart } = req.body;
        let total = 0;
        for await (const product of cart) {
            let foundProduct = await Product.findById(product.id);
            total += foundProduct.price;
        }
        let newOrder = new Order({
            user: req.user._id,
            items: cart,
            total: total,
            address: {
                address,
                city,
                state,
                zip,
                country
            }
        })
        let savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.log(error);
        res.status(401).json(error.message);
    }
}

orderController.getOrders = async(req, res, next) => {
    try {
        const orders = await Order.find({ user: req.user._id });
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        res.status(401).json(error.message);
    }
}

module.exports = orderController;