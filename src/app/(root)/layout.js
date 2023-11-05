import React from "react";
import Navbar from "../components/navbar/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};

export default HomeLayout;
