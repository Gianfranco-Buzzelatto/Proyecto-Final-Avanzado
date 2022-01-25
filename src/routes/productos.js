const express = require('express');
const router = express.Router();
const productosCtrl = require('./../controllers/productosControllers');

router.get('/', productosCtrl.getProductos);
router.get('/:id', productosCtrl.getProducto);

module.exports = router;