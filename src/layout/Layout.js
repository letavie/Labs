// Layout.js
import React from "react";
import Navbar from "../components/Navbar/Navbar";

function Layout({ children, theme }) {
  return (
    <div>
      <Navbar theme={theme} />
      {children}
    </div>
  );
}

export default Layout;
