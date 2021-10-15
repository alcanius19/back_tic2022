const express = require("express");
// DEVUELVE UN OBJETO EN EL CUAL ME PERMITE INGRESAR RUTAS
const router = express.Router();
// lo importo para hacer consultas
const Ventas = require("../models/ventas");
// DEFINIR RUTAS DESDE EL SERVIDOR api

router.get("/", async (req, res) => {
  const ventas = await Ventas.find();
  console.log(ventas);
  res.json(ventas);
});

router.get("/codigo/:codigo", async (req, res) => {
  const ventas = await Ventas.findOne({ codigo: req.params.codigo });
  console.log(ventas);
  res.json(ventas);
});

router.get("/idcliente/:id_cliente", async (req, res) => {
  const ventas = await Ventas.find({ id_cliente: req.params.id_cliente });
  console.log(ventas);
  res.json(ventas);
});

router.get("/idvendedor/:id_vendedor", async (req, res) => {
  const ventas = await Ventas.find({ id_vendedor: req.params.id_vendedor });
  console.log(ventas);
  res.json(ventas);
});

router.get("/idestado/:estado", async (req, res) => {
  const ventas = await Ventas.findOne({ estado: req.params.estado });
  console.log(ventas);
  res.json(ventas);
});

router.post("/", async (req, res) => {
  const {
    codigo,
    id_cliente,
    id_vendedor,
    descripcion,
    estado,
    fecha_venta,
    productos,
    total,
  } = req.body;
  const ventas = new Ventas({
    codigo,
    id_cliente,
    id_vendedor,
    descripcion,
    estado,
    fecha_venta,
    productos,
    total,
  });
  await ventas.save();
  res.json({ status: "guardado" });
});

router.put("/:id", async (req, res) => {
  const {
    codigo,
    id_cliente,
    id_vendedor,
    descripcion,
    estado,
    fecha_venta,
    productos,
    total,
  } = req.body;
  const venta = {
    codigo,
    id_cliente,
    id_vendedor,
    descripcion,
    estado,
    fecha_venta,
    productos,
    total,
  };
  await Ventas.findByIdAndUpdate(req.params.id, venta);
  res.json({ status: "actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Ventas.findByIdAndRemove(req.params.id);
  res.json({ status: "eliminado" });
});

module.exports = router;
