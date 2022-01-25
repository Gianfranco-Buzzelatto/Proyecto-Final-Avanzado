const express = require('express');
const router = express.Router();
const empleadosCtrl = require('./../../controllers/empleadosControllers')

router.get('/', empleadosCtrl.getEmpleados);
router.get('/single/:id', empleadosCtrl.getEmpleado);
router.post('/create', empleadosCtrl.createEmpleado);
router.put('/update/:id', empleadosCtrl.updateEmpleado);
router.put('/delete/:id', empleadosCtrl.deleteEmpleado);
router.put('/administrador/:id', empleadosCtrl.admin);
router.put('/mostrar/:id', empleadosCtrl.mostrar);

module.exports = router; 