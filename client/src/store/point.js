import { makeAutoObservable } from "mobx";

class Point {
  points = [];
  constructor() {
    makeAutoObservable(this);
  }
  createPoint(name, plant) {
    console.log(name,plant)
    fetch(`http://localhost:5000/api/points`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ name: name, plant: plant }),
    }).then(() => this.fetchPoints());
  }
  fetchPoints() {
    fetch("http://localhost:5000/api/points")
      .then((responce) => responce.json())
      .then((json) => {
        this.points = [...json];
      });
  }
  updatePoint(item) {
    fetch(`http://localhost:5000/api/points/${item._id}`, {
      method: "PUT",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        name: item.name,
        plant: item.plant,
        banned: item.banned,
      }),
    }).then(() => this.fetchPoints());
  }
  deletePoint(id) {
    fetch(`http://localhost:5000/api/points/${id}`, { method: "DELETE" }).then(
      () => this.fetchPoints()
    );
  }
  deleteAllPoints() {
    fetch(`http://localhost:5000/api/points`, { method: "DELETE" }).then(() =>
      this.fetchPoints()
    );
  }
}
const point = new Point();
export default point;
