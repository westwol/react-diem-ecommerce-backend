const bcrypt = require('bcrypt');
const User = require('../models/User');
const signToken = require('../helpers/signToken');
require('dotenv').config( { path: 'variables.env' });

let authController = {};

authController.login = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const userExists = await User.findOne( { email: email })   
            .lean();
        if (!userExists) {
            throw new Error('The email or password entered is appears invalid.');
        }
        // Check for password validation
        const isPasswordValid = await bcrypt.compare(password, userExists.password);
        if (!isPasswordValid) {
            throw new Error('The email or password entered is appears invalid.');
        }
        userExists.token = signToken(userExists, process.env.JWT_SECRET, "24h");
        res.status(200).json(userExists);
    } catch (error) {
        res.status(401).json(error.message);
    }
}

authController.signUp = async(req, res, next) => {
    try {
        const { name, last_name, email, password } = req.body;
        // Check if user exists
        const userExists = await User.findOne({ email: email });
        if (userExists) {
            throw new Error('This email has already been used.');
        }
        // Hashing password
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            name,
            last_name,
            email,
            password: hashedPassword
        });
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json(error.message);
    }
}

authController.me = async(req, res, next) => {
    res.status(200).json(req.user);
}

module.exports = authController;