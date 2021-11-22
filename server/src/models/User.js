const Mongoose = require('mongoose')

const UsuariosSchema = new Mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
})

module.exports = Mongoose.model('usuarios', UsuariosSchema)
