const readDb = require("../utils/readFile");

module.exports = {
  async LOGIN(req, res) {
    try {
      let users = readDb("users");
      let loginUser = req.body;
      let findUser = users.find(
        user =>
          user.email === loginUser.email &&
          user.password === loginUser.password,
      );
      if (!findUser) {
        return res.status(401).json({
          message: "Invalid email or password",
          status: 401,
        });
      }
      return res.status(200).json({
        message: "User successfully logged in",
        status: 200,
      });
    } catch (err) {
      return globalError(err, res);
    }
  },
};
