const express = require('express');
const app = express();
const employees = require('./routes/employees');
const empresas = require('./routes/empresas');
const centro_unidad = require('./routes/centro_unidad');
const bodegas = require('./routes/bodega');
const productos = require('./routes/productos');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());
// Routes views
app.use(express.static(__dirname + '/public'));
//Rotues api
app.use('/api/empleados', employees);
app.use('/api/empresas', empresas);
app.use('/api/centro_unidad', centro_unidad);
app.use('/api/bodegas', bodegas);
app.use('/api/productos', productos);




// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
