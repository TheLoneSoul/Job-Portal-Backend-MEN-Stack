const express = require('express');
const router = express.Router();
const {getUser, registerUser} = require('../controls/userController')

router.get('/',getUser);
router.post('/', registerUser);
module.exports = router;