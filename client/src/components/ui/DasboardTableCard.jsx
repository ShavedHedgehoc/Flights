import { getTransformedTime } from "../../utils/dateTransforms";

export default function DashboardTableCard({ props }) {
  const isActive = () => props.activeStates.includes(props.currentState);
  const isVisible = () => props.visibleStates.includes(props.currentState);

  return (
    <>
      {isVisible() ? (
        <div
          className="flex flex-row justify-content-center pr-1"
          // style={{ backgroundColor: "beige" }}
        >
          <div className="flex flex-row align-items-center p-3">
            {isActive() ? (
              <span
                className="pi pi-flag-fill "
                style={{ fontSize: "0.9rem", color: "lightgreen" }}
              />
            ) : (
              <span />
            )}
          </div>
          <div className="flex flex-column">
            <div
              className="flex justify-content-center font-bold"
              style={{ fontSize: "0.8rem" }}
            >
              {isActive() ? props.currentState : <span />}
            </div>
            <div className="flex justify-content-center">
              {props.arrivalName}
              <span
                className="pi pi-arrow-right m-1"
                style={{ fontSize: "0.7rem" }}
              />
              {props.flightType}
              <span
                className="pi pi-arrow-right m-1"
                style={{ fontSize: "0.7rem" }}
              />
              {props.departureName}
            </div>
            <div
              className="flex justify-content-center font-italic"
              style={{ fontSize: "0.8rem" }}
            >
              {props.flightType}
            </div>
            <div
              className="flex justify-content-center gap-5 font-italic"
              style={{ fontSize: "0.8rem" }}
            >
              <div>{getTransformedTime(props.startTime)}</div>
              <div>
                {getTransformedTime(props.endTime)
                  ? getTransformedTime(props.endTime)
                  : "..."}
              </div>
            </div>
            {/* <div
              className="flex justify-content-center font-bold"
              style={{ fontSize: "0.8rem" }}
            >
              {isActive() ? props.currentState : <span />}
            </div> */}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
