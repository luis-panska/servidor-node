const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const getConnection = require("./db/connection");
const dotenv = require("dotenv");
dotenv.config({ path: "./envs/.env" });

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use("/api/users", require("./user/user.routes"));
app.use("/api/auth", require("./auth/auth.routes"));

// Conexión a la base de datos
getConnection();

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
