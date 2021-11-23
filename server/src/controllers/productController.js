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

exports.findAll = async (req, res) => {
    let products = null;
    try {
        products = await Product.findAll();
    } catch (err) {
        return res.status(400).json({ message: e.message });
    }

    return res.json({ products })
}

exports.findById = async (req, res) => {
    let product = null;
    try {
        product = await Product.findByPk(req.params.id);
    } catch (err) {
        return res.status(400).json({ message: e.message });
    }

    return res.json({ product })
}