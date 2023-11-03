const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 

exports.register = async (req, res) => {
    const { userName, password, firstName, lastName, email, avatarURL } = req.body;

    let foundUser = await User.findOne({ where: { userName } });
    if (foundUser) return res.status(400).send("Nom d'utilisateur déjà pris.");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
        userName,
        password: hashedPassword,
        firstName,
        lastName,
        email,
        avatarURL
    });    

    res.json({ message: 'Utilisateur enregistré !' });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ where: { email } });
    if (!foundUser) return res.status(400).send('Utilisateur non trouvé.');

    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (!validPassword) return res.status(400).send('Mot de passe invalide.');

    const token = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    res.send(token);
};
