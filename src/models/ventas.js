const mongoose = require('mongoose');
const { Schema } = mongoose;

const VentasSchema = new Schema({

    codigo: { type: Number, required: true },
    id_cliente: { type: String, required: true },
    id_vendedor: { type: String, required: true },
    productos: { type: Number, required: true },
    impuesto: { type: Number, required: true },
    neto: { type: Number, required: true },
    neto1: { type: Number, required: true },
    devoluciones: { type: Number, required: true },
    metodo_pago: { type: Number, required: true },
    fecha: { type: Date, default: Date.now },


});

module.exports = mongoose.model('Ventas', VentasSchema, 'ventas');