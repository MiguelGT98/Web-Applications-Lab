import React from "react";

import "./ButtonImg.css";

const ButtonImg = ({ src, label, onSelect, selected }) => {
  return (
    <div
      className={`button-img ${selected ? "selected" : ""}`}
      onClick={() => {
        onSelect(label);
      }}
    >
      <img src={require(`../static/images/${src}`)}></img>
      <p>{label}</p>
    </div>
  );
};

export default ButtonImg;
