


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrimeReactProvider }  from "primereact/api";
import "primereact/resources/themes/lara-light-amber/theme.css";
// import "primereact/resources/themes/md-dark-indigo/theme.css";
import "./styles/addition.css"
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import Layout from "./components/Layout";
import routes from "./router";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes,
    },
  ]);


  return (
    
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    
  );
}

export default App;
