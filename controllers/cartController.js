const Product = require('../models/Product');

let cartController = {};

cartController.getCurrentCart = async(req, res, next) => {
    try {
        const { ids } = req.body;
        const products = await Product.find({ _id: { $in: ids }});
        res.status(200).json(products);
    } catch (error) {
        res.status(401).json(error.message);
    }
}

module.exports = cartController;