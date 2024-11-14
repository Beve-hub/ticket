const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const token = req.headers['auth-token']; // Correct way to access the header
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, 'thstyaysjhjdkgxjn');
        req.user = verified;
        next(); // Call next() to proceed to the next middleware
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(400).send('Invalid Token');
    }
};
