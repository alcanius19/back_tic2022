const mongoose = require("mongoose");
const { Schema } = mongoose;

const VendedorSchema = new Schema({
  nombre: { type: String, required: true },
  telefono: { type: Number, required: true },
  direccion: { type: String, required: true },
  rol: { type: Number, required: true },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vendedores", VendedorSchema, "vendedores");
