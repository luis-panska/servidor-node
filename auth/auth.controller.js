const { authUser } = require("./auth.service");

// Crear usuario
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authUser({ email, password });
    res.status(200).json({
      ok: true,
      message: "Ingreso correcto",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Email o contraseña incorrectos",
      error: error.message,
    });
  }
};

module.exports = {
  signIn,
};
