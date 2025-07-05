const User = require('../models/User');
const jwt = require('../utils/jwt');

// Signup function
exports.signup = async (req, res) => {
    const { fullName, email, password } = req.body;

    try {
        const newUser = new User({ fullName, email, password });
        await newUser.save();

        const token = jwt.generateToken(newUser._id);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};

// Login function
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.generateToken(user._id);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};