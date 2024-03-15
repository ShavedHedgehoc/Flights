const Plant = require("../models/Plant");

class PlantController {
  async createPlant(req, res) {
    try {
      const { name } = req.body;
      const candidate = await Plant.findOne({ name: name });
      if (candidate) {
        return res.status(400).json({ message: "Plant already exists!" });
      }
      const plant = new Plant({ name: name });
      await plant.save();
      return res.json({ message: "Plant was created" });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async getPlants(req, res) {
    try {
      const plants = await Plant.find();
      return res.status(200).json(plants);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async getPlantById(req, res) {
    try {
      const id = req.params.id;
      const plant = await Plant.findOne({ _id: id });
      return res.status(200).json(plant);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }

  async deletePlantById(req, res) {
    try {
      const id = req.params.id;
      const result = await Plant.deleteOne({ _id: id });
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async deleteAllPlants(req, res) {
    try {
      const plants = await Plant.deleteMany();
      return res.status(200).json(plants);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async updatePlantById(req, res) {
    try {
      const id = req.params.id;
      const { name, banned } = req.body;

      const result = await Plant.updateOne(
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

module.exports = new PlantController();
