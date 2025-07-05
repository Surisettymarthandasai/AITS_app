const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'your_secret_key'; // Replace with your actual secret key

const generateToken = (userId) => {
    const payload = { id: userId };
    const options = { expiresIn: '1h' }; // Token expiration time
    return jwt.sign(payload, secretKey, options);
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null; // Return null if token is invalid
    }
};

module.exports = {
    generateToken,
    verifyToken,
};