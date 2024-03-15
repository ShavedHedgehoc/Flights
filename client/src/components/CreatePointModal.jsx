import React, { useState, useEffect } from "react";
// import point from "../store/point";
// import plant from "../store/plant";
import { observer } from "mobx-react-lite";

const CreatePointModal = observer(({ setIsOpenCreate, plant, point }) => {
  // useEffect(() => {
  //   plant.fetchPlants();
  // }, []);
  const [pointName, setPointName] = useState("");
  const [plantName, setPlantName] = useState(plant.plants[0]._id);
  const create = (name, plant) => {
    console.log(name, plant)
    point.createPoint(name, plant);
    setIsOpenCreate(false);
  };

  return (
    <div>
      <h1>Создать точку выгрузки</h1>
      <input
        type="text"
        value={pointName}
        onChange={(e) => setPointName(e.target.value)}
      />
      <select
        name="123"
        id="123"
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
      >
        {plant.plants.map((item) => (
          <option value={item._id}>{item.name}</option>
        ))}
      </select>

      <button onClick={() => create(pointName, plantName)}>Добавить</button>
    </div>
  );
});

export default CreatePointModal;
