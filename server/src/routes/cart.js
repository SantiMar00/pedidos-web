const express = require('express')
const router = express.Router()

const cartController = require('../controllers/cartController')

router.post('/', cartController.create)
router.put('/', cartController.insertProduct)
router.get('/:id', cartController.findById)

module.exports = router
