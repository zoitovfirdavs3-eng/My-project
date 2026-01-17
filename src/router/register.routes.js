const { Router } = require("express");
const registerController = require("../controller/register.controller");
const registerValidator = require("../utils/register.validator");

const registerRouter = Router();

registerRouter.get("/", (req, res) => {
  res.render("register");
});

registerRouter.post("/", registerValidator, registerController.REGISTER);

module.exports = registerRouter;
