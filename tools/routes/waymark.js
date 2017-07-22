const express = require('express');
const router = express.Router();
const axios = require('axios');

const Waymark = require('../models/Waymark')

router.route('/')
 .get((req, res) => {
   axios.get('https://techtestpersonapi.azurewebsites.net/api/GETPersonsTechTestAPI?code=Z5Dm297Ijn9weSo75EVtsJHN9HoVE0fgJt8zIGXWV4ZOOCGNpaYBtw==')
   .then((response, error) => {
     Waymark.create(response.data)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
   })
 })

module.exports = router;
