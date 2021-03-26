const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const bearerHeader = req.header('authorization'); // fetching Bearer Token from header
    if (!bearerHeader) return res.status(401).json({ status: 'Access Denied' });
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    try {
        const verified = jwt.verify(bearerToken, process.env.TOKEN_SECRET_KEY);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(400).json(
            {
                status: 'invalid'
            });
    }
}
