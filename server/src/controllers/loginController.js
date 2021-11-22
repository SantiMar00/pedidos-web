const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models').user;

const verifyJWT = token => jwt.verify(token, secret);

exports.login = async (req, res) => {
    const inputUser = req.body.username
    const inputPass = req.body.password

    if (!inputUser || !inputPass)
        return res.status(400).json({
            message: 'Debe de ingresar un email y password para ingresar',
        });

    let findUser = null;
    try {
        findUser = await User.findOne({ where: { username: inputUser } })
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }

    if (!findUser) {
        return res.status(400).json({
            message: 'Usuario no encontrado',
        });
    }

    try {
        if (!bcrypt.compareSync(inputPass, findUser.password))
            return res.status(400).json({
                message: 'password incorrecto',
            });

        const token = jwt.sign(
            { id: findUser.id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRE_TIME }
        )

        return res.json({
            token: token,
        })
    } catch (err) {
        return res.status(400).json({ message: e.message });
    }
}

exports.isAuth = async (req, res, next) => { }
