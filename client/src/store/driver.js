import { makeAutoObservable } from "mobx";

class Driver {
  drivers = [];
  constructor() {
    makeAutoObservable(this);
  }
  createDriver(name) {
    fetch(`http://localhost:5000/api/drivers`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ name: name }),
    }).then(() => this.fetchDrivers());
  }
  fetchDrivers() {
    fetch("http://localhost:5000/api/drivers")
      .then((responce) => responce.json())
      .then((json) => {
        this.drivers = [...json];
      });
  }
  updateDriver(item) {
    fetch(`http://localhost:5000/api/drivers/${item._id}`, {
      method: "PUT",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ name: item.name, banned:item.banned }),
    }).then(() => this.fetchDrivers());
  }
  deleteDriver(id) {
    fetch(`http://localhost:5000/api/drivers/${id}`, { method: "DELETE" }).then(
      () => this.fetchDrivers()
    );
  }
  deleteAllDrivers() {
    fetch(`http://localhost:5000/api/drivers`, { method: "DELETE" }).then(
      () => this.fetchDrivers()
    );
  }
}
const driver = new Driver();
export default driver;
