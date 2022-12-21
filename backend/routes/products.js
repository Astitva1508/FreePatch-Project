const express = require('express')
const router = express()

const {getAllProducts,getSingleProduct,createProduct,deleteProduct,updateProduct} = require('../controllers/product.js')

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').get(getSingleProduct).put(updateProduct).delete(deleteProduct)

module.exports = router