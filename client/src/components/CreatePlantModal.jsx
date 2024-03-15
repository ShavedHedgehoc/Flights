import React, { useState } from "react";
import plant from "../store/plant";
import { observer } from "mobx-react-lite";

const CreatePlantModal = observer(({ setIsOpenCreate }) => {
  const [plantName, setPlantName] = useState("");
  const create = (name) => {
    plant.createPlant(name);
    setIsOpenCreate(false);
  };
  return (
    <div>
      <h1>Создать площадку</h1>
      <input
        type="text"
        value={plantName}
        onChange={(e) => setPlantName(e.target.value)}
      />
      <button onClick={() => create(plantName)}>Добавить</button>
    </div>
  );
});

export default CreatePlantModal;
