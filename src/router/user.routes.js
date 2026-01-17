const { Router } = require("express");
const registerRouter = require("./register.routes");
const loginRouter = require("./login.routes");

const userRouter = Router();

userRouter.use("/auth/register", registerRouter);
userRouter.use("/auth/login", loginRouter);

userRouter.use("/", (req, res) => {
  res.render("index");
});

userRouter.use("/auth/register", registerRouter);
userRouter.use("/auth/login", loginRouter);

module.exports = userRouter;
