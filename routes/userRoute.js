const express = require('express');
const router = express.Router();
const {getUser, registerUser, signinUser} = require('../controls/userController')

router.get('/',getUser);
router.post('/register', registerUser);
router.post('/signin', signinUser);
module.exports = router;