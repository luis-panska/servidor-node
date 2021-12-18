const mongoose = require("mongoose");

async function getConnection() {
  try {
    const MONGO_URI =
      process.env.MONGO_URI || "mongodb://localhost:27017/store";
    console.log(MONGO_URI);
    await mongoose.connect(MONGO_URI);
    console.log("Connected to mongodb");
  } catch (error) {
    console.log("Error al conectarse a la Base de Datos", error);
  }
}

module.exports = getConnection;
