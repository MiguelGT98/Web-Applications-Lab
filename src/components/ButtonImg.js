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
      <img src={require(`../static/images/${src}`)} alt="Button example"></img>
      <p>{label}</p>
    </div>
  );
};

export default ButtonImg;
