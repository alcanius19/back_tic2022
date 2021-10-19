const express = require("express");
// DEVUELVE UN OBJETO EN EL CUAL ME PERMITE INGRESAR RUTAS
const router = express.Router();
// lo importo para hacer consultas
const Vendedores = require("../models/vendedores");
// DEFINIR RUTAS DESDE EL SERVIDOR api

router.get("/", async (req, res) => {
  const vendedores = await Vendedores.find();
  console.log(vendedores);
  res.json(vendedores);
});

router.post("/", async (req, res) => {
  const { nombre, telefono, direccion, rol, fecha } = req.body;
  const vendedor = new Vendedores({
    nombre,
    telefono,
    direccion,
    rol,
    fecha,
  });
  await vendedor.save();
  res.json({ status: "guardado" });
});

module.exports = router;
