const express = require('express');
const router = express.Router();
const usuariosCtrl = require('./../../controllers/usuariosControllers')
 
router.get('/', usuariosCtrl.getUsers);
router.post('/create', usuariosCtrl.createUser);
router.put('/update/:id', usuariosCtrl.updateUser);
router.put('/delete/:id', usuariosCtrl.deleteUser);
router.put('/habilitar', usuariosCtrl.habilitarCuenta);


module.exports = router;