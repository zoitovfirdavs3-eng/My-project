require("dotenv").config();
const express = require("express");
const path = require("path");
const layout = require("express-ejs-layouts");
const userRouter = require("./router/user.routes");

const app = express();
app.use(layout);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layout/main");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.static(path.join(process.cwd(), "src", "views", "partial")));

app.use("/api", userRouter);

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}-port`));
