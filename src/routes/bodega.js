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
router_bodega.get('centro_unidad/:id', (req, res) => {
  const { centrounidad_id } = req.params; 
  mysqlConnection.query('SELECT * FROM bodega WHERE centrounidad_id = ?', [centrounidad_id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});


module.exports = router_bodega;
