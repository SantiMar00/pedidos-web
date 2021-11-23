require('dotenv').config()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models').user
const secret = process.env.JWT_SECRET

const verifyJWT = (token) => jwt.verify(token, secret)
const generateJWT = (payload) => jwt.sign(payload, secret)

exports.login = async (req, res) => {
    const inputUser = req.body.username
    const inputPass = req.body.password

    if (!inputUser || !inputPass)
        return res.status(400).json({
            message: 'Debe de ingresar un email y password para ingresar',
        })

    let userFound = null
    try {
        userFound = await User.findOne({ where: { username: inputUser } })
    } catch (e) {
        return res.status(400).json({ message: e.message })
    }

    if (!userFound) {
        return res.status(400).json({
            message: 'Usuario no encontrado',
        })
    }

    try {
        if (!bcrypt.compareSync(inputPass, userFound.password))
            return res.status(400).json({
                message: 'password incorrecto',
            })

        return res.json({
            token: generateJWT({ id: userFound.id }),
        })
    } catch (err) {
        return res.status(400).json({ message: err.message })
    }
}

exports.isAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers
        if (!authorization) {
            throw Error('Unauthorized')
        }
        const decoded = verifyJWT(authorization.split(' ')[1])
        req.user = await User.findByPk(decoded.id)
        if (!req.user) {
            throw Error('Unauthorized')
        }
        next()
    } catch (error) {
        return res.status(401).send({ message: error.message })
    }
}
