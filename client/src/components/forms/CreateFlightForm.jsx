import React from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { RadioButton } from "primereact/radiobutton";
import { CreateFlightFormLabels } from "../../const/const";

export default function CreateFlightForm({ props }) {
  return (
    <Dialog
      header={CreateFlightFormLabels.SUBMIT_LABEL}
      visible={props.isOpenCreate}
      onHide={() => props.actions.setIsOpenCreate(false)}
      style={{ width: "40vw" }}
      breakpoints={{ "960px": "75vw", "641px": "100vw" }}
    >
      <div className="flex flex-column align-items-stretch gap-4">
        <div
          className="flex justify-content-start"
            // style={{ backgroundColor: "lightpink" }}
        >
          <div
            className="flex flex-column flex-1 justify-content-between  p-3 gap-3"
            // style={{ backgroundColor: "bisque" }}
          >
            <div
              className="flex flex-grow-1 align-items-start p-3"
              //   style={{ backgroundColor: "red", fontSize: "1.6rem" }}
            >
              <span />
            </div>
            <div className="flex flex-column flex-1 justify-content-end gap-2">
              <div
                className="flex flex-0 justify-content-center"
                // style={{ backgroundColor: "red" }}
              >
                <Dropdown
                  value={props.driverId}
                  onChange={(e) => props.actions.setDriverId(e.value)}
                  options={props.driverOptions}
                  optionLabel="name"
                  placeholder={CreateFlightFormLabels.DRIVER_LABEL}
                  className="w-full"
                />
              </div>
              <div className="flex flex-0">
                <Dropdown
                  value={props.arrivalId}
                  onChange={(e) => props.actions.setArrivalId(e.value)}
                  options={props.pointOptions}
                  optionLabel="name"
                  placeholder={CreateFlightFormLabels.ARRIVAL_LABEL}
                  className="w-full"
                />
              </div>
              <div className="flex flex-0">
                <Dropdown
                  value={props.departureId}
                  onChange={(e) => props.actions.setDepartureId(e.value)}
                  options={props.pointOptions}
                  optionLabel="name"
                  placeholder={CreateFlightFormLabels.DEPARTURE_LABEL}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-column gap-3 flex-0 p-3"
            // style={{ backgroundColor: "aquamarine" }}
          >
            {props.flightOptions.map((option) => {
              return (
                <div
                  key={option}
                  className="flex align-items-center flex-0 p-2"
                  //   style={{ backgroundColor: "lightgoldenrodyellow" }}
                >
                  <RadioButton
                    inputId={option}
                    name="flightType"
                    value={option}
                    onChange={(e) => props.actions.setFlightType(e.value)}
                    checked={props.flightType === option}
                  />
                  <label htmlFor={option} className="ml-2">
                    {option}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="flex "
          style={{ backgroundColor: "yellow" }        }
        >
          <Button
            className="w-full justify-content-center"
            onClick={() =>
              props.actions.create(
                props.driverId.key,
                props.arrivalId.key,
                props.departureId.key,
                props.flightType
              )
            }
          >
            {CreateFlightFormLabels.SUBMIT_LABEL}
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
