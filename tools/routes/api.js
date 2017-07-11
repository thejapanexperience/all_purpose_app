const express = require('express');
const router = express.Router();

router.use('/waymark', require('./waymark'))

module.exports = router;
