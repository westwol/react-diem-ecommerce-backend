const jwt = require('jsonwebtoken');
const User = require('../models/User');
const signToken = require('../helpers/signToken');
require('dotenv').config( { path: 'variables.env' });

module.exports = async(req, res, next) => {
    try {
        const token = req.headers['x-auth-token'];
        // Verifying if jwt is valid
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        // Gathering user information
        const user = await User.findOne({ email: decodedToken.email })
            .select('email name last_name created_at')
                .lean();
        if (!user) {
            throw new Error('Your token is either expired or invalid');
        }
        // Signing in token
        user.token = signToken(user, process.env.JWT_SECRET, "24h");
        req.user = user;
        next()
    } catch (error) {
        res.status(401).json(error.message);
    }
}