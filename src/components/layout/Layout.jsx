import React from "react";
import Navigation from "../navigation/Navigation";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      {children}
    </div>

  );
};

export default Layout;
