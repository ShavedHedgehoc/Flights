import React, { useState } from "react";
import plant from "../store/plant";
import { observer } from "mobx-react-lite";

const UpdatePlantModal = observer(({ itemToUpdate, setIsOpenUpdate }) => {
  const [plantName, setPlantName] = useState(itemToUpdate.name);
  const [banned, setBanned] = useState(itemToUpdate.banned);
  const update = (name, banned) => {
    itemToUpdate.name = plantName;
    itemToUpdate.banned = banned;
    plant.updatePlant(itemToUpdate);
    setIsOpenUpdate(false);
  };
  return (
    <div>
      <h1>Изменить водителя</h1>
      <input
        type="text"
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
      />
      <input
        type="checkbox"
        checked={banned}
        onChange={() => setBanned(!banned)}
      />
      <button onClick={() => update(plantName, banned)}>Изменить</button>
    </div>
  );
});

export default UpdatePlantModal;
