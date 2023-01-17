import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Slider from "./Slider";

const Header = () => {
  return (
    <>
      <div className="header flex flex-center flex-column">
        <Navbar />
        <Slider />
      </div>
    </>
  );
};

export default Header;
