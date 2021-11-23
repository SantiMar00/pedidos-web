const express = require('express')
const cors = require('cors')
const mongoPool = require('./src/config/pool')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

// Middlewares -----------------------------------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'POST'],
        credential: true,
    })
)

// Rutas -----------------------------------------------------------------------------------------
const register = require('./src/routes/register')
app.use('/register', register)

const login = require('./src/routes/login')
app.use('/login', login)

const product = require('./src/routes/product')
app.use('/product', product)

const cart = require('./src/routes/cart')
app.use('/cart', cart)

app.get('/', (req, res) => { })

// Server run -------------------------------------------------------------------------------------
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto', port)
})
