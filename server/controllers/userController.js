const User = require("../models/User");

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      console.log(users);
      return res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async deleteAllUsers(req, res) {
    try {
      const result = await User.deleteMany();
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
}

module.exports = new UserController();
