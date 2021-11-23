const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Product = require('../models').product;

exports.create = async (req, res) => {
    let product = null;
    try {
        product = await Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: ''
        })
    } catch (err) {
        return res.status(400).json({ message: e.message });
    }

    return res.json({
        product,
    })
}