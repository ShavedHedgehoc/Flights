import { Button } from "primereact/button";
export default function DashboardTableButton({ props }) {
  const isVisible = () => props.visibleStates.includes(props.currentState);
  return (
    <>
      {isVisible() ? (
        <div
          className="flex justify-content-center p-1"
          // style={{ backgroundColor: "beige" }}
        >
          <Button
            icon={props.away ? "pi pi-home" : "pi pi-forward"}
            size="large"
            text
            onClick={() => props.action()}
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
