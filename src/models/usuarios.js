const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  },
  estado: {
    type: Boolean,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
module.exports = model("Usuario", UsuarioSchema);
