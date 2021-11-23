const express = require('express')
const router = express.Router()

const invoiceController = require('../controllers/invoiceController')

/**
 * /id cartId
 * BODY:
 *  medio 
 *  
 *
 * @var {[type]}
 */
router.post('/:cartId', invoiceController.create)

/**
 * NOTHING
 *
 * @var {[type]}
 */
router.get('/', invoiceController.findAll)

/**
 * URL/1 invoice id
 *
 * @var {[type]}
 */
router.get('/:id', invoiceController.findOne)

/**
 * URL/user/1 user id
 *
 * @var {[type]}
 */
router.get('/user/:userId', invoiceController.findOneByUserId)

module.exports = router
