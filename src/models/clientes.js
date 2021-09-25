const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClienteSchema = new Schema({
  nombre: { type: String, required: true },
  telefono: { type: Number, required: true },
  direccion: { type: String, required: true},
  compras: {type: Number, required: true},
  ultima_compra: {type:String, required: true},
  fecha: {type: Date,default: Date.now}
});

module.exports = mongoose.model('Clientes', ClienteSchema,'clientes');

