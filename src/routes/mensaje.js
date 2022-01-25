const express = require('express');
const router = express.Router();
const { newMessage } = require('../controllers/mensajeControllers');

router.post('/', newMessage);


module.exports = router;