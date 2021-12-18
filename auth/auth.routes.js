const { Router } = require("express");
const { signIn } = require("./auth.controller");

const authRouter = Router();

authRouter.post("/", signIn);

module.exports = authRouter;
