const express = require('express');
const morgan = require('morgan');
const router = express.Router();
const {mongoose} = require('./database');
// configura las rutas
const path = require('path');



const app = express();

// Db connection


// Settings 
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(morgan('dev'));
// PERMITE ENVIAR DATOS EN FORMATO JSON
app.use(express.json());

const clientes = require(path.join(__dirname ,'/routes/clientes.routes.js'));
const productos = require(path.join(__dirname ,'/routes/productos.routes.js'));


// Routes

app.use('/api/clientes',clientes);
app.use('/api/productos',productos);

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});