const User = require('../models/User')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    bcrypt.hash(password, 10, async (err, hash) => {
        if (err) {
            res.json({ message: 'Error:' + err })
        }
        const user = new User({
            username: username,
            password: hash,
        })
        try {
            const saved = await user.save()
            res.json({ message: 'Usuario registrado' })
        } catch (err) {
            res.json({ message: 'Error:' + err })
        }
    })
}

module.exports = { register }
