import { Spin } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./../components/header/index";

const Peahoki = () => {
  return (
    <div>
      <Header />
      <React.Suspense fallback={<div className="background-spin"><Spin /></div>}>
        <Outlet />
      </React.Suspense>
    </div>
  );
};

export default Peahoki;
