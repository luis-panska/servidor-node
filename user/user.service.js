const User = require("./user.model");
const bcrypt = require("bcryptjs");
const findUser = (id) => {
  const user = User.findById(id);
  if (!user) throw new Error("No existe el usuario");
  return user;
};

const listUsers = async () => {
  const users = await User.find();
  if (users.length === 0) throw new Error("No hay usuarios");
  return users;
};

const createUser = async (user) => {
  const passwordEncryted = await bcrypt.hash(user.password, 10);
  const newUser = new User({ ...user, password: passwordEncryted });
  const userCreated = await newUser.save();
  if (!userCreated) throw new Error("No se pudo crear el usuario");
  return userCreated;
};

const deleteUser = (id) => {
  const user = User.findByIdAndDelete(id);
  if (!user) throw new Error("No existe el usuario");
  return user;
};

module.exports = {
  findUser,
  listUsers,
  createUser,
  deleteUser,
};
