import React from "react";
import { FaPaperPlane } from "react-icons/fa";
const Slider = () => {
  return (
    <div className="container">
      <div className="header-content text-center flex flex-column">
        <h1 className="text-uppercase header-title">
          marketing solution agency
        </h1>
        <p className="text-lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          doloremque dolore quia omnis maxime corporis deserunt neque
          voluptatum.
        </p>
        <a href="/" className="btn header-btn btn-blue">
          <FaPaperPlane /> <span>get started</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
