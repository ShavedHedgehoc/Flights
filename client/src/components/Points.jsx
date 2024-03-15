import React, { useState } from "react";
import { useEffect } from "react";
import plant from "../store/plant";
import point from "../store/point";
import { observer } from "mobx-react-lite";
import CreatePointModal from "./CreatePointModal";
import UpdatePointModal from "./UpdatePointModal";

const Points = observer(() => {
  useEffect(() => {
    point.fetchPoints();
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
        <h1>Точки выгрузки:</h1>
      </div>
      <div>
        {point.points.map((item) => (
          <li key={item._id}>
            <div>
              <h3>{item.name}</h3>
              <h3>{item.plant.name}</h3>
              <input type="checkbox" checked={item.banned} disabled={true} />
              <button onClick={() => point.deletePoint(item._id)}>X</button>
              <button onClick={() => update(item)}>U</button>
            </div>
          </li>
        ))}
      </div>
      <button onClick={() => setIsOpenCreate(true)}>
        Добавить точку выгрузки
      </button>
      <button onClick={() => point.deleteAllPoints()}>
        Удалить все точки выгрузки
      </button>
      {isOpenCreate && (
        <CreatePointModal
          setIsOpenCreate={setIsOpenCreate}
          plant={plant}
          point={point}
        />
      )}
      {isOpenUpdate && (
        <UpdatePointModal
          setIsOpenUpdate={setIsOpenUpdate}
          itemToUpdate={itemToUpdate}
        />
      )}
    </div>
  );
});

export default Points;
