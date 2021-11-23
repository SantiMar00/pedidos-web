const Cart = require('../models').cart;
const CartProduct = require('../models').cartProduct;
const Product = require('../models').product;
const User = require('../models').user;
const CartService = require('../services/cart.service');

exports.create = async (req, res) => {
    try {
        let cart = null;
        try {
            cart = await Cart.create({
                userId: req.user.id
            })
        } catch (err) {
            return res.status(400).json({ message: e.message });
        }

        try {
            if (req.body.products?.length) {
                for (const productId of req.body.products) {
                    await CartProduct.create({
                        cartId: cart.id,
                        productId: productId,
                    })
                }
            }
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }

        try {
            cart = await Cart.findOne({
                where: {
                    id: cart.id
                },
                include: [{
                    model: User,
                    as: 'user'
                },
                {
                    model: Product,
                    as: 'products'
                }]
            })

            // if (req.body.products?.length) {
            //     cart.products = await Product.findAll({
            //         where: {
            //             id: req.body.products
            //         }
            //     })
            // }
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }

        return res.json({
            cart,
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

exports.insertProduct = async (req, res) => {
    try {
        const cartProd = await CartProduct.findOne({
            where: {
                cartId: req.body.cartId,
                productId: req.body.productId,
            }
        })

        if (!cartProd)
            await CartProduct.create({
                cartId: req.body.cartId,
                productId: req.body.productId,
            })
        else
            await cartProd.update({
                amount: cartProd.amount + 1
            })

        const cart = await CartService.findById(req.body.cartId)

        return res.json({
            cart
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const cartProd = await CartProduct.findOne({
            where: {
                cartId: req.params.id,
                productId: req.body.productId,
            }
        })

        if (!cartProd) {
            return res.status(400).json({ message: 'Este producto no existe en el carrito' });
        } else {
            if (cartProd.amount > 1) {
                await cartProd.update({
                    amount: cartProd.amount - 1
                })
            } else {
                await cartProd.destroy()
            }
        }

        const cart = await CartService.findById(req.params.id)

        return res.json({
            cart
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}

exports.findById = async (req, res) => {
    try {
        return res.json({
            cart: await CartService.findById(req.params.id)
        })
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
}