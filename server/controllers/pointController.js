const Point = require("../models/Point");

class PointController {
  async createPoint(req, res) {
    try {
      const { name, plant } = req.body;
      console.log(plant)
      const candidate = await Point.findOne({ name: name });
      if (candidate) {
        return res.status(400).json({ message: "Point already exists!" });
      }
      const point = new Point({ name: name, plant: plant });
      await point.save();
      return res.json({ message: "Point was created" });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async getPoints(req, res) {
    try {
      const points = await Point.find().populate('plant');
      return res.status(200).json(points);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async getPointById(req, res) {
    try {
      const id = req.params.id;
      const point = await Point.findOne({ _id: id });
      return res.status(200).json(point);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }

  async deletePointById(req, res) {
    try {
      const id = req.params.id;
      const result = await Point.deleteOne({ _id: id });
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async deleteAllPoints(req, res) {
    try {
      const points = await Point.deleteMany();
      return res.status(200).json(points);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async updatePointById(req, res) {
    try {
      const id = req.params.id;
      const { name, plant, banned } = req.body;

      const result = await Point.updateOne(
        { _id: id },
        { name: name, plant: plant, banned: banned }
      );
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
}

module.exports = new PointController();
