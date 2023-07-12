const mongoose = require("mongoose");

// Define el esquema para la colección de usuarios
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Define el modelo para la colección de usuarios
const User = mongoose.model("User", userSchema);

// Exporta el modelo
module.exports = User;
