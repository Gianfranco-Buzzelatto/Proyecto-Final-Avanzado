const express = require('express');
const router = express.Router();
const { login, loginAdmin } = require('./../controllers/authControllers');

router.post('/', login);
router.post('/admin', loginAdmin);


module.exports = router;