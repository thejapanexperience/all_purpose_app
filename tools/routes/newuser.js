const express = require('express');
const router = express.Router();
const axios = require('axios');

// const Waymark = require('../models/Waymark')

router.route('/')
.get((req, res) => {
  axios.get('https://randomuser.me/api/?format=json')
  .then(response => {
    console.log('response: ', response.data)
    res.send(response.data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})
module.exports = router;
