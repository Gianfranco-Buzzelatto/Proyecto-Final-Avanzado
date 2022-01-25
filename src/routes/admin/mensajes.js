const express = require('express');
const router = express.Router();
const mensajesCtrl = require('../../controllers/mensajeControllers')

router.get('/mensajes', mensajesCtrl.getMensajes);
router.get('/mensaje/:id', mensajesCtrl.getMensaje)
router.put('/mensajes/delete/:id', mensajesCtrl.deleteMensajes);
router.put('/mensajes/:id',mensajesCtrl.marcarComoVisto);

module.exports = router;