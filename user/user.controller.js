const { listUsers, createUser } = require("./user.service");

// Listar usuarios
const getUsers = async (req, res) => {
  try {
    const users = await listUsers();
    res.status(200).json({
      ok: true,
      message: "Lista de usuarios",
      users: users,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error al listar los usuarios",
      error: error.message,
    });
  }
};

// Buscar usuario
const getUser = (req, res) => {
  res.send("getUser");
};

// Crear usuario
const postUser = async (req, res) => {
  try {
    const user = req.body;
    const userCreated = await createUser(user);
    res.status(200).json({
      ok: true,
      message: "Usuario creado correctamente",
      user: userCreated,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
};

// Eliminar usuario
const deleteUser = (req, res) => {
  res.send("deleteUser");
};

module.exports = {
  getUsers,
  getUser,
  postUser,
  deleteUser,
};
