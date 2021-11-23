const Cart = require('../models').cart;
const CartProduct = require('../models').cartProduct;
const Product = require('../models').product;
const User = require('../models').user;

exports.findById = async (id) => {
    let cart = await Cart.findByPk(id, {
        include: [{
            model: User,
            as: 'user'
        },
            // {
            //     model: Product,
            //     as: 'product'
            // }
        ]
    });

    const cartProduct = await CartProduct.findAll({
        where: {
            cartId: cart.id
        },
        include: [
            {
                model: Product,
                as: 'product'
            }
        ]
    })
    // console.log(cartProduct);

    // const prodsIds = []
    // for (const cp of cartProduct) {
    //     prodsIds.push(cp.productId)
    // }

    // const prods = await Product.findAll({
    //     where: {
    //         id: prodsIds
    //     }
    // })

    // cart.product = prods

    return {
        ...cart.dataValues,
        cartProducts: cartProduct
    }
}