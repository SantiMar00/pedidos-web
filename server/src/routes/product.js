const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

/**
 * BODY:
 *  name    STRING
    description     STRING
    price   FLOAT
 *
 * @var {[type]}
 */
router.post('/', productController.create)

/**
 * NOTHING
 *
 * @var {[type]}
 */
router.get('/', productController.findAll)

/**
 * URL/1
 *
 * @var {[type]}
 */
router.get('/:id', productController.findById)

module.exports = router
