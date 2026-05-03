const express = require('express');
const router = express.Router();
const {getUser, registerUser, signinUser} = require('../controls/userController')
const {protection, isAdmin } = require('../middleware/authMiddleware')
const {validateRegister, validateSignin} = require('../middleware/validationMiddleware')

router.get('/', protection, isAdmin, getUser);
router.post('/register', validateRegister, registerUser);
router.post('/signin', validateSignin, signinUser);
module.exports = router;