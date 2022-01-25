const express = require('express');
const router = express.Router();
const categoriasCtrl = require('./../../controllers/categoriasControllers')

router.get('/', categoriasCtrl.getCategorias);
router.get('/single/:id', categoriasCtrl.getCategoria);
router.post('/create', categoriasCtrl.createCategoria);
router.put('/update/:id', categoriasCtrl.updateCategoria);
router.put('/delete/:id', categoriasCtrl.deleteCategoria);

module.exports = router;