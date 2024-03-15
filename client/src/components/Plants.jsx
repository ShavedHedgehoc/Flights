import React, { useState } from "react";
import { useEffect } from "react";
import plant from "../store/plant";
import { observer } from "mobx-react-lite";
import CreatePlantModal from "./CreatePlantModal";
import UpdatePlantModal from "./UpdatePlantModal";

const Plants = observer(() => {
  useEffect(() => {
    plant.fetchPlants();
  }, []);
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [itemToUpdate, setItemToUpdate] = useState(null);
  const update = (item) => {
    setItemToUpdate(item);
    setIsOpenUpdate(true);
  };
  return (
    <div>
      <div>
        <h1>Площадки:</h1>
      </div>
      <div>
        {plant.plants.map((item) => (
          <li key={item._id}>
            <div>
              <h3>{item.name}</h3>
              <input type="checkbox" checked={item.banned} disabled={true} />
              <button onClick={() => plant.deletePlant(item._id)}>X</button>
              <button onClick={() => update(item)}>U</button>
            </div>
          </li>
        ))}
      </div>
      <button onClick={() => setIsOpenCreate(true)}>Добавить площадку</button>
      <button onClick={() => plant.deleteAllPlants()}>
        Удалить все площадки
      </button>
      {isOpenCreate && <CreatePlantModal setIsOpenCreate={setIsOpenCreate} />}
      {isOpenUpdate && (
        <UpdatePlantModal
          setIsOpenUpdate={setIsOpenUpdate}
          itemToUpdate={itemToUpdate}
        />
      )}
    </div>
  );
});

export default Plants;
