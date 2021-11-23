const express = require('express')
const cors = require('cors')
const mongoPool = require('./src/config/pool')
const loginController = require('./src/controllers/loginController')
const register = require('./src/routes/register')
const login = require('./src/routes/login')
const product = require('./src/routes/product')
const cart = require('./src/routes/cart')
const invoice = require('./src/routes/invoice')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

// Middlewares -----------------------------------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    cors({
        origin: '*',
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        credential: true,
    })
)

// Rutas -----------------------------------------------------------------------------------------
app.use('/register', register)

app.use('/login', login)

// ## FROM HERE, ALL ENDPOINTS ARE PRIVATED ##
app.use(loginController.isAuth)

app.get('/user', loginController.isAuth, (req, res) => res.json(req.user))

app.use('/product', product)

app.use('/cart', cart)

app.use('/invoice', invoice)

app.get('/', (req, res) => {
    return res.status(200).json({ status: 'Server running!' });
})

// Server run -------------------------------------------------------------------------------------
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto', port)
})
