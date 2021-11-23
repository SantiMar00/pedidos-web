const bcrypt = require('bcrypt')
const User = require('../models').user;

const register = async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const address = req.body.address
    const ivaCondition = req.body.ivaCondition

    if (!username || !password)
        return res.status(400).json({
            message: 'Debe de ingresar un email y password para registrarse',
        });

    let userFound = null;
    try {
        userFound = await User.findOne({ where: { username } });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

    if (userFound)
        return res.status(400).json({ message: 'Error: el usuario ya existe' });

    let hash = null;
    try {
        hash = bcrypt.hashSync(password, 10);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
    const user = new User({
        username: username,
        firstname: firstname,
        lastname: lastname,
        address: address,
        ivaCondition: ivaCondition,
        password: hash,
    })

    try {
        await user.save()
    } catch (err) {
        return res.status(400).json({ message: error.message });
    }

    return res.json({ message: 'User registrado exitosamente!' })
}

module.exports = { register }
