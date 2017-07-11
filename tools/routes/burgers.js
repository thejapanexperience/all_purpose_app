const express = require('express');
const router = express.Router();
const axios = require('axios');

const Burger = require('../models/Burger')

router.route('/')
 .get((req, res) => {
   axios.get('https://techtestpersonapi.azurewebsites.net/api/GETPersonsTechTestAPI?code=Z5Dm297Ijn9weSo75EVtsJHN9HoVE0fgJt8zIGXWV4ZOOCGNpaYBtw==')
   .then((response, error) => {
     Burger.create(response.data)
    .then(data => {
      console.log('data: ', data)
      res.send(data)
    })
    .catch(err => {
      res.status(400).send(err)
    })
   })
 })

module.exports = router;
