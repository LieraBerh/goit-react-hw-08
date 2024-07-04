import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
        <Suspense fallback={null}>
          {children}
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default Layout;
