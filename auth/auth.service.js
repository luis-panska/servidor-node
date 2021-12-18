const User = require("../user/user.model");
const bcrypt = require("bcryptjs");
const authUser = async ({ email, password }) => {
  console.log("email", email);
  console.log("password", password);
  const user = await User.findOne({ email }).exec();
  console.log("usuario", user);
  if (!user) throw new Error("No existe un usuario registrado con ese correo");
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  console.log(isPasswordCorrect);
  if (!isPasswordCorrect) throw new Error("Usuario o contraseña incorrectos");
  return user;
};

module.exports = {
  authUser,
};
