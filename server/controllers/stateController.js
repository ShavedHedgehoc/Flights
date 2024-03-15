const State = require("../models/State");

class StateController {
  async createState(req, res) {
    try {
      const { name } = req.body;
      const candidate = await State.findOne({ name: name });
      if (candidate) {
        return res.status(400).json({ message: "State already exists!" });
      }
      const state = new State({ name: name });
      await state.save();
      return res.json({ message: "State was created" });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async getStates(req, res) {
    try {
      const states = await State.find();
      return res.status(200).json(states);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async getStateById(req, res) {
    try {
      const id = req.params.id;
      const state = await State.findOne({ _id: id });
      return res.status(200).json(state);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }

  async deleteStateById(req, res) {
    try {
      const id = req.params.id;
      const result = await State.deleteOne({ _id: id });
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async deleteAllStates(req, res) {
    try {
      const states = await State.deleteMany();
      return res.status(200).json(states);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async updateStateById(req, res) {
    try {
      const id = req.params.id;
      const { name, banned } = req.body;

      const result = await State.updateOne(
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

module.exports = new StateController();
