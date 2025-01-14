import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
const RouterComp = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RouterComp;
