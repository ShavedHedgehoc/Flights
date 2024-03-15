import { makeAutoObservable } from "mobx";

class Plant {
  plants = [];
  constructor() {
    makeAutoObservable(this);
  }
  createPlant(name) {
    fetch(`http://localhost:5000/api/plants`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ name: name }),
    }).then(() => this.fetchPlants());
  }
  fetchPlants() {
    fetch("http://localhost:5000/api/plants")
      .then((responce) => responce.json())
      .then((json) => {
        this.plants = [...json];
      });
  }
  updatePlant(item) {
    fetch(`http://localhost:5000/api/plants/${item._id}`, {
      method: "PUT",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ name: item.name, banned: item.banned }),
    }).then(() => this.fetchPlants());
  }
  deletePlant(id) {
    fetch(`http://localhost:5000/api/plants/${id}`, { method: "DELETE" }).then(
      () => this.fetchPlants()
    );
  }
  deleteAllPlants() {
    fetch(`http://localhost:5000/api/plants`, { method: "DELETE" }).then(() =>
      this.fetchPlants()
    );
  }
}
const plant = new Plant();
export default plant;
