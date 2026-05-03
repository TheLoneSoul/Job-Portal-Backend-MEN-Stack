const express = require('express');
const router = express.Router();
const {getUser} = require('../controls/userController')

router.get('/',getUser);

module.exports = router;