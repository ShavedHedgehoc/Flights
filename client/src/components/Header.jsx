import React from "react";

import { PathConstants } from "../const/const";
import { Menubar } from "primereact/menubar";

const Header = () => {
  const items = [
    {
      icon: "pi pi-home",
      url: PathConstants.DASHBOARD,
    },
    {
      label: "Журнал рейсов",
      icon: "pi pi-star",
      url: PathConstants.FLIGHTS,
    },
    {
      label: "Админ",
      icon: "pi pi-wrench",
      items: [
        {
          label: "Водители",
          // icon: "pi pi-star",
          url: PathConstants.DRIVERS,
        },
        {
          label: "Площадки",
          // icon: "pi pi-star",
          url: PathConstants.PLANTS,
        },
        {
          label: "Точки погрузки",
          // icon: "pi pi-star",
          url: PathConstants.POINTS,
        },
      ],
    },
  ];

  return <Menubar model={items} />;
};

export default Header;
