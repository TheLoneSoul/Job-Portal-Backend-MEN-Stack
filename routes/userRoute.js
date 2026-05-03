const express = require('express');
const router = express.Router();
const {getUser, registerUser, signinUser} = require('../controls/userController')
const {protection, isAdmin } = require('../middleware/authMiddleware')

router.get('/', protection, isAdmin, getUser);
router.post('/register', registerUser);
router.post('/signin', signinUser);
module.exports = router;