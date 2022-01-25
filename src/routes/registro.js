const express = require('express');
const router = express.Router();
const usuariosCtrl = require('./../controllers/usuariosControllers')
const verificar = require("./../controllers/verificarCorreo");
 
router.post('/', usuariosCtrl.createUser);
router.put('/update/:id', usuariosCtrl.updateUser);
router.put('/delete/:id', usuariosCtrl.deleteUser);
router.put('/habilitarCuenta', usuariosCtrl.habilitarCuenta);
router.post('/verify/:uid', verificar.verificarCorreo);


module.exports = router;