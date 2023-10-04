const User = require('../models/user'); 
const bcrypt = require('bcrypt');
const jwt = require('jwt'),

exports.register = async (req, res) => {
    const { userName, password, firstName, lastName, email, avatarURL } = req.body;

    let user = await User.findOne({ where: { userName } });
    if (user) return res.status(400).send("Nom d'utilisateur déjà pris.");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = await User.create({
        userName,
        password: hashedPassword,
        firstName,
        lastName,
        email,
        avatarURL
    });

    res.send('Utilisateur enregistré !');
};

exports.login = async (req, res) => {
    const { userName, password } = req.body;


    const user = await User.findOne({ where: { userName } });
    if (!user) return res.status(400).send('Utilisateur non trouvé.');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Mot de passe invalide.');

    const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
    res.header('auth-token', token).send(token);
};

