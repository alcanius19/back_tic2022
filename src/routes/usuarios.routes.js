const express = require("express");
// DEVUELVE UN OBJETO EN EL CUAL ME PERMITE INGRESAR RUTAS
const router = express.Router();
// lo importo para hacer consultas
const Usuarios = require("../models/usuarios");

router.get("/", async (req, res) => {
  const usuarios = await Usuarios.find();
  console.log(usuarios);
  res.json(usuarios);
});

router.get("/:id", async (req, res) => {
  const usuarios = await Usuarios.findById(req.params.id);
  console.log(usuarios);
  res.json(usuarios);
});

router.post("/", async (req, res) => {
  const { nombre, usuario, password, rol, estado, fecha } = req.body;
  const usuarios = new Usuarios({
    nombre,
    cedula,
    usuario,
    password,
    rol,
    estado,
    fecha,
  });
  await usuarios.save();
  res.json({ status: "guardado" });
});

router.put("/:id", async (req, res) => {
  const { nombre, usuario, password, rol, estado, fecha } = req.body;
  const usuarios = {
    nombre,
    cedula,
    usuario,
    password,
    rol,
    estado,
    fecha,
  };
  await Usuarios.findByIdAndUpdate(req.params.id, usuarios);
  res.json({ status: "actualizado" });
});

router.delete("/:id", async (req, res) => {
  await Usuarios.findByIdAndRemove(req.params.id);
  res.json({ status: "eliminado" });
});

module.exports = router;
