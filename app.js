// Modules
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const connectDb = require('./config/db');
const cors = require('cors');

// Database
connectDb();

// Routes
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


app.use('/auth', authRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);

app.use(function(req, res, next) {
    res.writeHead(302, {'Location': 'https://github.com/westwol/react-diem-ecommerce-backend'});
    res.end();
});

module.exports = app;
