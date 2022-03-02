import React, { Component } from "react";
import "./styles.css";
import background from "../../assets/background_image.png";

const AllPagesBackground = ({ children }) => {
  return (
    <div
      id="background-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
};

export default AllPagesBackground;
