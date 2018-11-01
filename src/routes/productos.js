const express = require('express');
const router_producto = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router_producto.get('/', (req, res) => {
  mysqlConnection.query('SELECT * FROM producto', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An Employee
router_producto.get('/bodega/:bodega_id', (req, res) => {
  const { bodega_id } = req.params; 
  mysqlConnection.query('SELECT * FROM producto WHERE bodega_id = ?', [bodega_id], (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});



module.exports = router_producto;
