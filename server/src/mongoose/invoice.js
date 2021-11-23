const Mongoose = require('mongoose')

const InvoiceSchema = new Mongoose.Schema({
    userId: { type: Number, required: true },
    cartId: { type: Number, required: true },
    username: { type: String, required: true },
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    address: { type: String, required: false },
    ivaCondition: { type: String, required: false },
    monto: { type: String, required: false },
    medio: { type: String, required: false }, // Tarjeta, efectivo, etc
})

module.exports = Mongoose.model('invoices', InvoiceSchema)