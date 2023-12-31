const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');


    console.log({token});

    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log({ verified });
        req.user = verified;
        next();
    } catch (err) {
        console.error(err);
        res.status(401).send('Invalid Token');
    }
};

module.exports = {verifyToken};