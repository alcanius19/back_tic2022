const { Schema, model } = require("mongoose");

const RolSchema = Schema({
  id: {
    type: Number,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  },
});

module.exports = model("Rol", RolSchema);
