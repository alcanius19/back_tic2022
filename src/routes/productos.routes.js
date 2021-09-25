const express  =  require('express'); 
// DEVUELVE UN OBJETO EN EL CUAL ME PERMITE INGRESAR RUTAS
const router = express.Router();
// lo importo para hacer consultas
const Productos = require('../models/productos');
// DEFINIR RUTAS DESDE EL SERVIDOR api

router.get('/' , async (req,res)=>{
   const productos = await Productos.find();
  console.log(productos);
  res.json(productos);
  
}) 

router.post('/', async (req,res)=>{
   const {titulo,descripcion} = req.body;
   const producto = new Productos({titulo,descripcion})
   await producto.save();
   res.json({ status: 'guardado'});
} )





module.exports = router;