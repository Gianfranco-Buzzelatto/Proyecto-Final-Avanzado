const express = require('express');
const router = express.Router();
const categoriasCtrl = require('./../controllers/categoriasControllers')

router.get('/', categoriasCtrl.getCategorias);
router.get('/single', categoriasCtrl.getCategoria);

module.exports = router;