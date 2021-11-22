const mongoose = require('mongoose')

const URL = process.env.MONGO_URL ?? 'mongodb+srv://user:1234567890@cluster0.bseox.mongodb.net/pedidos'

mongoose
    .connect(URL, { useNewUrlParser: true })
    .then(() => console.log('Conectado con MongoDB.'))
    .catch((e) => console.log('Error en la conexión con MongoDB: ' + e))
