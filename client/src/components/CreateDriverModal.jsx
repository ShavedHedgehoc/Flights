import React, { useState } from "react";
import driver from "../store/driver";
import { observer } from "mobx-react-lite";

const CreateDriverModal = observer(({ setIsOpenCreate }) => {
  const [driverName, setDriverName] = useState("");
  const create = (name) => {
    driver.createDriver(name);
    setIsOpenCreate(false);
  };
  return (
    <div>
      <h1>Создать водителя</h1>
      <input
        type="text"
        value={driverName}
        onChange={(e) => setDriverName(e.target.value)}
      />
      <button onClick={() => create(driverName)}>Добавить</button>
    </div>
  );
});

export default CreateDriverModal;
