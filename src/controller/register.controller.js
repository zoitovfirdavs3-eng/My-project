const { globalError } = require("shokhijakhon-error-handler");
const readDb = require("../utils/readFile");
const writeDb = require("../../../../Najot Ta'lim/4-month hometasks/9-uyga vazifa/src/utils/writeFile");

module.exports = {
  async REGISTER(req, res) {
    try {
      let newUser = req.body;
      let users = await readDb("users");
      let findUser = users.find(user => user.email === newUser.email);
      if (findUser) {
        return res.status(409).json({
          message: "User already exists",
          status: 409,
        });
      }
      newUser = {id: users.length ? users.at(-1).id + 1 : 1, ...newUser, createdAt: new Date().toLocaleString()};
      users.push(newUser);
      await writeDb("users", users);
      return res.status(201).json({
        message: "User successfully registered",
        status: 201,
      });
    } catch (err) {
      return globalError(err, res);
    }
  },
};
