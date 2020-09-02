const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const isAuth = require('../middleware/isAuth');

/* Logs in */
router.post('/login', authController.login);

/* Retrieves new token and name if vaid */
router.get('/me', isAuth, authController.me);

/* Signs user up */
router.post('/register', authController.signUp);

module.exports = router;
