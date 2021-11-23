const express = require('express')
const router = express.Router()

const cartController = require('../controllers/cartController')

/**
 * SI SE QUIERE SE PUEDE MNADR:
 *  BODY: 
 *      products: [] ARRAY DE LOS IDS DE LOS PRODUCTOS QUE SE QUIERE INSERTAR AL CREAR
 *  Si no se quiere añadir productos al comenzar se deja solo y luego se los agrega
 *
 * @var {[type]}
 */
router.post('/', cartController.create)

/**
 * BODY:
 *  cartId
    productId
 *
 * @var {[type]}
 */
router.put('/insert', cartController.insertProduct)

/**
 * EL ID DEL PRODUCTO QUE SE DESEA BORRAR
 * :id - cartId
 * BODY:
      productId
 *
 * @var {[type]}
 */
router.delete('/:id', cartController.deleteProduct)

/**
 * EL ID DEL CARRITO QUE SE QUIERE OBTENER
 *
 * @var {[type]}
 */
router.get('/:id', cartController.findById)

module.exports = router
