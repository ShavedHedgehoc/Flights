import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import FlightTypeConstants from "../store/fligtTypeConstants";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";

const CreateFlightModal = observer(
  ({ isOpenCreate, setIsOpenCreate, point, driver, flight }) => {
    const [driverId, setDriverId] = useState();
    const [arrivalId, setArrivalId] = useState();
    const [departureId, setDepartureId] = useState(point.points[0]._id);
    const [flightType, setFlightType] = useState(FlightTypeConstants.ORDER);

    const create = (driverId, arrivalId, departureId, flightType) => {
      const loadingStartTime = new Date().toLocaleString("en-US", {
        timezone: "Europe/Moscow",
        hour12: false,
      });
      const creatorId = null;

      flight.createFlight(
        driverId,
        arrivalId,
        departureId,
        flightType,
        loadingStartTime,
        creatorId
      );
      setIsOpenCreate(false);
    };
    const makeOptions = (arr) => {
      let items = [];
      arr.map(
        (item) => (items = [...items, { key:item._id, code: item._id, name: item.name }])
      );
      return items;
    };
    const driverOptions = makeOptions(driver.drivers);
    const pointOptions = makeOptions(point.points);

    // const options = [
    //   {name:"fsfsf", code:"dadssdad"}
    // ]

    // const makeOptions = (arr)=>{
    //   let items=[]
    //   arr.map(item => (items=[...items,{code: item._id, name:item.name}]))
    //   return items
    //   }
    // const options = makeOptions(driver.drivers)

    return (
      <Dialog
        header={<h2>Создать рейс</h2>}
        visible={isOpenCreate}
        onHide={() => setIsOpenCreate(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        <Dropdown
          value={driverId}
          onChange={(e) => setDriverId(e.value)}
          options={driverOptions}
          optionLabel="name"
          placeholder="Водитель"
          className="w-full md:w-14rem"
        />
        <Dropdown
          value={arrivalId}
          onChange={(e) => setArrivalId(e.value)}
          options={pointOptions}
          optionLabel="name"
          placeholder="Отправление"
          className="w-full md:w-14rem"
        />
        <Dropdown
          value={departureId}
          onChange={(e) => setDepartureId(e.value)}
          options={pointOptions}
          optionLabel="name"
          placeholder="Прибытие"
          className="w-full md:w-14rem"
        />
       
        <select
          name="type"
          id="type"
          value={flightType}
          onChange={(e) => setFlightType(e.target.value)}
        >
          <option value={FlightTypeConstants.ORDER}>
            {FlightTypeConstants.ORDER}
          </option>
          <option value={FlightTypeConstants.PRODUCT}>
            {FlightTypeConstants.PRODUCT}
          </option>
          <option value={FlightTypeConstants.INTERMEDIATE}>
            {FlightTypeConstants.INTERMEDIATE}
          </option>
          <option value={FlightTypeConstants.COUNTING}>
            {FlightTypeConstants.COUNTING}
          </option>
        </select>
        <button
          onClick={() =>
            create(driverId.key, arrivalId.key, departureId.key, flightType.key)
          }
        >
          Добавить
        </button>
      </Dialog>
    );
  }
);

export default CreateFlightModal;
