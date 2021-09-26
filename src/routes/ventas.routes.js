const express = require('express');
// DEVUELVE UN OBJETO EN EL CUAL ME PERMITE INGRESAR RUTAS
const router = express.Router();
// lo importo para hacer consultas
const Ventas = require('../models/ventas');
// DEFINIR RUTAS DESDE EL SERVIDOR api

router.get('/', async(req, res) => {
    const ventas = await Ventas.find();
    console.log(ventas);
    res.json(ventas);
})

router.post('/', async(req, res) => {
    const { codigo, id_cliente, id_vendedor, productos, impuesto, neto, neto1, devoluciones, metodo_pago, fecha } = req.body;
    const ventas = new Ventas({ codigo, id_cliente, id_vendedor, productos, impuesto, neto, neto1, devoluciones, metodo_pago, fecha })
    await ventas.save();
    res.json({ status: 'guardado' });
})





module.exports = router;