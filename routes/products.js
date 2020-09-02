const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

/* Product listing */
router.get('', productsController.getProductListing);

/* Product view */ 
router.get('/:id', productsController.getProductById);

module.exports = router;
