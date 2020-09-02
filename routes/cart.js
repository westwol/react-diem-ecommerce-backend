const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

/* Retrieves current cart */
router.post('', cartController.getCurrentCart);

module.exports = router;
