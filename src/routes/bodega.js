const express = require('express');
const router_bodega = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router_bodega.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM bodega', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An Employee
router_bodega.get('/centro_unidad/:centro_id', (req, res) => {
  const { centro_id } = req.params; 
  console.log(req.params);
  console.log(centro_id);
  mysqlConnection.query('SELECT * FROM bodega WHERE centrounidad_id = ?', [centro_id], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});


module.exports = router_bodega;
