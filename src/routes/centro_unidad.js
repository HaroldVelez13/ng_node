const express = require('express');
const router_centro = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router_centro.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM centrounidad', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An Employee
router_centro.get('empresa/:empresa_id', (req, res) => {
  const { empresa_id } = req.params; 
  mysqlConnection.query('SELECT * FROM centrounidad WHERE empresa_id = ?', [empresa_id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});


module.exports = router_centro;
