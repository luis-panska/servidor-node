const { Router } = require("express");
const {
  getUser,
  postUser,
  deleteUser,
  getUsers,
} = require("./user.controller");

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/", postUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
