const express = require('express');
const router = express.Router();
const productosCtrl = require('./../../controllers/productosControllers')

router.get('/', productosCtrl.getProductosAdmin);
router.post('/create', productosCtrl.createProductos);
router.put('/update/:id', productosCtrl.updateProductos);
router.put('/delete/:id', productosCtrl.deleteProductos);

module.exports = router;