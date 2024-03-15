import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import flight from "../store/flight";

const Flights = observer(() => {
  useEffect(() => {
    flight.fetchFlights();
  }, []);

  return (
    <div>
      <h1>Рейсы</h1>
      <table>
        <th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </th>
        <tbody>
          {flight.flights.map((item) => (
            <tr>
              <td>
                {new Date(item.created_at).toLocaleString("en-US", {
                  timezone: "Europe/Moscow",
                  hour12: false,
                })}
              </td>
              <td>{item.driverId.name}</td>
              <td>
                <p>{item.arrivalId.name}</p>
                <p>
                  {new Date(item.loadingStartTime).toLocaleTimeString("en-US", {
                    timezone: "Europe/Moscow",
                    hour12: false,
                  })}
                  -{" "}
                  {new Date(item.loadingEndTime).toLocaleTimeString("en-US", {
                    timezone: "Europe/Moscow",
                    hour12: false,
                  })}
                </p>
              </td>
              <td>
                <p> {item.departureId.name}</p>
                <p>
                  {new Date(item.unloadingStartTime).toLocaleTimeString(
                    "en-US",
                    {
                      timezone: "Europe/Moscow",
                      hour12: false,
                    }
                  )}
                  -{" "}
                  {new Date(item.unloadingEndTime).toLocaleTimeString("en-US", {
                    timezone: "Europe/Moscow",
                    hour12: false,
                  })}
                </p>
              </td>
              <td>{item.currentState}</td>
              <td>
                <p>{item.activeAttr? "Active":"Inactive"} 
                </p>
              </td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default Flights;
