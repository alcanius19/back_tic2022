const express = require("express");
// DEVUELVE UN OBJETO EN EL CUAL ME PERMITE INGRESAR RUTAS
const router = express.Router();
// lo importo para hacer consultas
const Clientes = require("../models/clientes");
// DEFINIR RUTAS DESDE EL SERVIDOR api

router.get("/", async (req, res) => {
  const clientes = await Clientes.find();
  console.log(clientes);
  res.json(clientes);
});

router.get("/:id", async (req, res) => {
  const clientes = await Clientes.findById(req.params.id);
  console.log(clientes);
  res.json(clientes);
});

router.post("/", async (req, res) => {
  const { nombre, telefono, direccion, compras, ultima_compra, fecha } =
    req.body;
  const cliente = new Clientes({
    nombre,
    telefono,
    direccion,
    compras,
    ultima_compra,
    fecha,
  });
  await cliente.save();
  res.json({ status: "guardado" });
});

router.put("/:id", async (req, res) => {
  const { nombre, telefono, direccion, compras, ultima_compra, fecha } =
    req.body;
  const cliente = {
    nombre,
    telefono,
    direccion,
    compras,
    ultima_compra,
    fecha,
  };
  await Clientes.findByIdAndUpdate(req.params.id, cliente);
  res.json({ status: "actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Clientes.findByIdAndRemove(req.params.id);
  res.json({ status: "eliminado" });
});

module.exports = router;
