import React from "react";
import {PathConstants} from "../const/const";
import Flights from "../components/Flights";

const Dashboard = React.lazy(() => import("../components/Dashboard"));
const Plants = React.lazy(() => import("../components/Plants"));
const Points = React.lazy(() => import("../components/Points"));
const Drivers = React.lazy(() => import("../components/Drivers"));

const routes = [
  { path: PathConstants.DASHBOARD, element: <Dashboard /> },
  { path: PathConstants.PLANTS, element: <Plants /> },
  { path: PathConstants.POINTS, element: <Points /> },
  { path: PathConstants.DRIVERS, element: <Drivers /> },
  { path: PathConstants.FLIGHTS, element: <Flights /> },
];

export default routes;
