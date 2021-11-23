const Cart = require('../models').cart;
const CartProduct = require('../models').cartProduct;
const Product = require('../models').product;
const User = require('../models').user;
const Invoice = require('../mongoose/invoice');
const CartService = require('../services/cart.service');

exports.create = async (req, res) => {
    try {
        const medio = req.body.medio;
        const cart = await CartService.findById(req.params.cartId);

        if (!cart) {
            throw new Error("Cart don't exist");
        }

        if (!cart.cartProducts?.length)
            throw new Error("The cart don't has items");

        const oldInvoice = await Invoice.findOne({ userId: req.user.id, cartId: cart.id });

        if (oldInvoice)
            throw new Error("The cart was closed");

        let monto = 0;
        for (const cp of cart.cartProducts) {
            monto += cp.amount * cp.product.price;
        }

        const inv = new Invoice({
            userId: req.user.id,
            cartId: cart.id,
            username: req.user.username,
            firstname: req.user.firstname,
            lastname: req.user.lastname,
            address: req.user.address,
            ivaCondition: req.user.ivaCondition,
            monto,
            medio,
        })

        await inv.save();

        return res.json({
            invoice: inv
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

exports.findOneByUserId = async (req, res) => {
    try {
        return res.json({
            invoice: await Invoice.find({ userId: req.params.userId })
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

exports.findOne = async (req, res) => {
    try {
        return res.json({
            invoice: await Invoice.find({ _id: req.params.id })
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        return res.json({
            invoices: await Invoice.find({})
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}