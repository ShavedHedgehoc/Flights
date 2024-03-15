import React, { useState, useEffect } from "react";
import point from "../store/point";
import plant from "../store/plant";
import { observer } from "mobx-react-lite";

const UpdatePointModal = observer(({ itemToUpdate, setIsOpenUpdate }) => {
  useEffect(() => {
    plant.fetchPlants();
  }, []);
  const [pointName, setPointName] = useState(itemToUpdate.name);
  const [banned, setBanned] = useState(itemToUpdate.banned);
  const [plantName, setPlantName] = useState(itemToUpdate.plant._id);
  const update = (name, plant, banned) => {
    itemToUpdate.name = name;
    itemToUpdate.plant = plant;
    itemToUpdate.banned = banned;
    point.updatePoint(itemToUpdate);
    setIsOpenUpdate(false);
  };
  return (
    <div>
      <h1>Изменить точку выгрузки</h1>
      <input
        type="text"
        value={pointName}
        onChange={(e) => setPointName(e.target.value)}
      />
      <input
        type="checkbox"
        checked={banned}
        onChange={() => setBanned(!banned)}
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
      <button onClick={() => update(pointName, plantName, banned)}>
        Изменить
      </button>
    </div>
  );
});

export default UpdatePointModal;
