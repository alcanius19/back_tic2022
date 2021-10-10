const { json } = require("express");
const express = require("express");
// DEVUELVE UN OBJETO EN EL CUAL ME PERMITE INGRESAR RUTAS
const router = express.Router();
// lo importo para hacer consultas
const Productos = require("../models/productos");
// DEFINIR RUTAS DESDE EL SERVIDOR api

router.get("/", async (req, res) => {
  const productos = await Productos.find();
  console.log(productos);
  res.json(productos);
});

router.get("/:id", async (req, res) => {
  const productos = await Productos.findById(req.params.id);
  res.status(201).json({
    status: "informacion del producto :",
    res: productos,
  });
  res.json(productos);
});

// router.get("/:descripcion", (req, res, next) => {
//   Productos.findById(req.params.descripcion)
//     .then((userResponse) => {
//       res.status(200).json(userResponse);
//     })
//     .catch((error) => {
//       res.status(400).send(error);
//     });
// });

router.put("/:id", async (req, res) => {
  const { descripcion, valor_unit, estado, stock } = req.body;
  const producto = {
    descripcion,
    valor_unit,
    estado,
    stock,
  };
  await Productos.findByIdAndUpdate(req.params.id, producto);
  res.json({ status: "Producto Actualizado" });
});


router.post("/", async (req, res) => {
  try {
    const { descripcion, valor_unit, estado, stock } = req.body;
    const producto = new Productos({
      descripcion,
      valor_unit,
      estado,
      stock,
    });
    await producto.save();
    res.status(201).json({
      status: "Guardado Correctamente",
      res: producto,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
