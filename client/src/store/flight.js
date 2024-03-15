import { makeAutoObservable, runInAction } from "mobx";
import StateConstants from "./stateConstants";

class Flight {
  flights = [];
  constructor() {
    makeAutoObservable(this);
  }
  closeFlights(driverId) {
    fetch(`http://localhost:5000/api/flights/close`, {
      method: "PUT",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        driverId: driverId,
        currentState: StateConstants.FINISHED,
      }),
    }).then(() => this.fetchLastFlights());
  }
  createFlight(
    driverId,
    arrivalId,
    departureId,
    flightType,
    loadingStartTime,
    creatorId
  ) {
    // close entired flight
    this.closeFlights(driverId);

    fetch(`http://localhost:5000/api/flights`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        driverId: driverId,
        arrivalId: arrivalId,
        departureId: departureId,
        flightType: flightType,
        loadingStartTime: loadingStartTime,
        // beginAttr: beginAttr,
        creatorId: creatorId,
        currentState: StateConstants.LOADING,
      }),
    }).then(() => this.fetchLastFlights());
  }
  fetchLastFlights() {
    fetch("http://localhost:5000/api/flights/last")
      .then((responce) => responce.json())
      .then((json) => {
        runInAction(() => {
          this.flights = [...json];
        });
        // this.flights = [...json];
      });
  }
  fetchFlights() {
    fetch("http://localhost:5000/api/flights")
      .then((responce) => responce.json())
      .then((json) => {
        this.flights = [...json];
      });
  }
  updateFlight(item) {
    fetch(`http://localhost:5000/api/flights/${item._id}`, {
      method: "PUT",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(item),
    }).then(() => this.fetchLastFlights());
  }
}
const flight = new Flight();
export default flight;
