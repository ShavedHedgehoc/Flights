import React, { useState } from "react";
import driver from "../store/driver";
import { observer } from "mobx-react-lite";

const UpdateDriverModal = observer(({ itemToUpdate, setIsOpenUpdate }) => {
  const [driverName, setDriverName] = useState(itemToUpdate.name);
  const [banned, setBanned] = useState(itemToUpdate.banned);
  const update = (name, banned) => {
    itemToUpdate.name = driverName;
    itemToUpdate.banned = banned;
    driver.updateDriver(itemToUpdate);
    setIsOpenUpdate(false);
  };
  return (
    <div>
      <h1>Изменить водителя</h1>
      <input
        type="text"
        value={driverName}
        onChange={(e) => setDriverName(e.target.value)}
      />
      <input
        type="checkbox"
        checked={banned}
        onChange={() => setBanned(!banned)}
      />
      <button onClick={() => update(driverName, banned)}>Изменить</button>
    </div>
  );
});

export default UpdateDriverModal;
