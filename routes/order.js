const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth');
const orderController = require('../controllers/orderController');

/* Creates new order */
router.post('', isAuth, orderController.newOrder);

/* Retrieves user orders */
router.get('', isAuth, orderController.getOrders);

module.exports = router;
