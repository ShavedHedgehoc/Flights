const Flight = require("../models/Flight");

class FlightController {
  
  async closeFlightsByDriverId(req, res) {
    try {
      const { driverId, currentState } = req.body;
      const result = await Flight.findOneAndUpdate(
        { driverId: driverId },
        { activeAttr: false, currentState: currentState }
      );
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async createFlight(req, res) {
    try {
      const {
        driverId,
        arrivalId,
        departureId,
        flightType,
        loadingStartTime,
        beginAttr,
        creatorId,
        currentState,
      } = req.body;

      const flight = new Flight({
        driverId: driverId,
        arrivalId: arrivalId,
        departureId: departureId,
        flightType: flightType,
        loadingStartTime: loadingStartTime,
        beginAttr: beginAttr,
        creatorId: creatorId,
        currentState: currentState,
      });
      await flight.save();
      return res.json({ message: "flight was created" });
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }

  async getFlightByDriverId(req, res) {
    try {
      const driverId = req.params.id;
      console.log(driverId);
      const flight = await Flight.findOne({
        driverId: driverId,
        closed: false,
      });
      return res.status(200).json(flight);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async getFlights(req, res) {
    try {
      const flights = await Flight.find()
        .populate("driverId")
        .populate("arrivalId")
        .populate("departureId");
      return res.status(200).json(flights);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async getLastFlights(req, res) {
    try {
      const flights = await Flight.find({ activeAttr: true })
        .populate("driverId")
        .populate("arrivalId")
        .populate("departureId");

      return res.status(200).json(flights);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }

  async updateFlightById(req, res) {
    try {
      const id = req.params.id;

      const {
        driverId,
        arrivalId,
        departureId,
        arrivalTime,
        departureTime,
        flightType,
        loadingStartTime,
        loadingEndTime,
        unloadingStartTime,
        unloadingEndTime,
        beginAttr,
        endAttr,
        creatorId,
        currentState,
        activeAttr,
        awayTime
      } = req.body;

      const result = await Flight.updateOne(
        { _id: id },
        {
          driverId,
          arrivalId,
          departureId,
          arrivalTime,
          departureTime,
          flightType,
          loadingStartTime,
          loadingEndTime,
          unloadingStartTime,
          unloadingEndTime,
          beginAttr,
          endAttr,
          creatorId,
          currentState,
          activeAttr,
          awayTime
        }
      );
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
  async deleteAllFlights(req, res) {
    try {
      const flights = await Flight.deleteMany();
      return res.status(200).json(flights);
    } catch (error) {
      console.log(error);
      res.send({ message: "Server error", error });
    }
  }
}

module.exports = new FlightController();
