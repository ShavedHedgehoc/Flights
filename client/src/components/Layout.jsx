import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";
import { Suspense } from "react";


const Layout = () => {
  return (
    // <div className="App">
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {/* <Footer /> */}
    </>
    // </div>
  );
};

export default Layout;
