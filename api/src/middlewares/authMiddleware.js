const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, 'SECRET_KEY');
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}


router.get('/some-protected-route', verifyToken, (req, res) => {
    router.use(verifyToken);
  });
  
