const express = require('express');
const router = express.Router();

router.use('/burgers', require('./burgers'))

module.exports = router;
