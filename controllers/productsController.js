const Product = require('../models/Product');

let productsController = {};

productsController.getProductListing = async(req, res, next) => {
    try {
        const products = await Product.find({ });
        res.status(200).json(products);
    } catch (error) {
        res.status(401).json(error.message);
    }
}

productsController.getProductById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw new Error('Product does not exist')
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(401).json(error.message);
    }
}

module.exports = productsController;