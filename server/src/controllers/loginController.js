const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    const inputUser = req.body.username
    const inputPass = req.body.password

    try {
        const findUser = await User.findOne({ username: inputUser })
        if (!findUser) {
            res.json({ message: 'Usuario no encontrado!' })
        } else {
            if (bcrypt.compareSync(inputPass, findUser.password)) {
                const id = findUser._id
                const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRE_TIME,
                })
                res.json({
                    token: token,
                    username: findUser.username,
                })
            } else {
                res.json({
                    message: 'Combinación de usuario y contraseña incorrecta.',
                })
            }
        }
    } catch (err) {
        res.json({ message: 'CATCH ERROR' })
    }
}

exports.isAuth = async (req, res, next) => {}
