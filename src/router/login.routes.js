const { Router } = require("express");
const loginController = require("../controller/login.controller");
const loginValidator = require("../utils/login.validator");

const loginRouter = Router();

loginRouter.get("/", (req, res) => {
  res.render("login");
});

loginRouter.post("/", loginValidator, loginController.LOGIN);

module.exports = loginRouter;
