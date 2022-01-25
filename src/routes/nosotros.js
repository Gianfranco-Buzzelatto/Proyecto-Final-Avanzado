const express = require('express');
const router = express.Router();
const nosotrosCtrl = require('./../controllers/nosotrosControllers');

router.get('/', nosotrosCtrl.getNosotros);


module.exports = router;