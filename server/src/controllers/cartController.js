const Cart = require('../models').cart;
const CartProduct = require('../models').cartProduct;
const Product = require('../models').product;

exports.create = async (req, res) => {
    let cart = null;
    try {
        cart = await Cart.create({
            user_id: req.user.id
        })
    } catch (err) {
        return res.status(400).json({ message: e.message });
    }

    if (req.body.products?.length) {
        for (const productId of req.body.products) {
            await CartProduct.create({
                cart_id: cart.id,
                product_id: productId,
                close: false
            })
        }

        cart = participacion.findOne({
            where: {
                id: cart.id
            },
            include: [{
                model: User,
                as: 'user'
            }, {
                model: Product,
                as: 'product'
            }]
        })
    }


    return res.json({
        cart,
    })
}

exports.findById = async (req, res) => {
    let cart = null;
    try {
        cart = await Cart.findByPk(req.params.id);
    } catch (err) {
        return res.status(400).json({ message: e.message });
    }

    return res.json({ cart })
}