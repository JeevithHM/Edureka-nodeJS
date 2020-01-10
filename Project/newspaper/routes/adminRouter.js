const express = require('express');
const router = express.Router();

const validator = require('../controllers/validators/adminValidator')
const adminController = require('../controllers/adminController')

router.post('/login', validator.loginValidator, adminController.login);
router.post('/register', validator.registerValidator, adminController.register);

module.exports = router;