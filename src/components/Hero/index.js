import React from "react";
import "./style.css";

// import backgroundImage from "../../Images/Aurora.jpg";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;
