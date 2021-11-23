const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.post('/', productController.create)
router.get('/', productController.findAll)
router.get('/:id', productController.findById)

module.exports = router
