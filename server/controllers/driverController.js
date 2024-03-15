const Driver = require("../models/Driver");

class DriverController {
  async getDrivers(req, res) {
    try {
      const drivers = await Driver.find();
      return res.status(200).json(drivers);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async getDriverById(req, res) {
    try {
      const id = req.params.id;
      const driver = await Driver.findOne({ _id: id });
      return res.status(200).json(driver);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async createDriver(req, res) {
    try {
      const { name } = req.body;
      console.log(name);
      const candidate = await Driver.findOne({ name: name });
      if (candidate) {
        return res.status(400).json({ message: "Driver already exists!" });
      }
      const driver = new Driver({ name: name });
      await driver.save();
      return res.json({ message: "Driver was created" });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async deleteDriverById(req, res) {
    try {
      const id = req.params.id;
      const result = await Driver.deleteOne({ _id: id });
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async deleteAllDrivers(req, res) {
    try {
      const drivers = await Driver.deleteMany();
      return res.status(200).json(drivers);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async updateDriverById(req, res) {
    try {
      const id = req.params.id;
      const { name, banned } = req.body;
      console.log(name,banned)

      const result = await Driver.updateOne(
        { _id: id },
        { name: name, banned: banned }
      );
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
}

module.exports = new DriverController();
