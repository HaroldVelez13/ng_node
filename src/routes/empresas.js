const express = require('express');
const router_empresa = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router_empresa.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM empresa', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});



module.exports = router_empresa;
