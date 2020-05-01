import React from "react";
import ButtonImg from "./ButtonImg";

import MdHelpCircle from "react-ionicons/lib/MdHelpCircle";

import "./ButtonFilter.css";

const ButtonFilter = ({ title, buttons, tooltip, setState }) => {
  const onSelect = (label) => {
    const newButtons = buttons.map((button) => {
      if (button.label === label) return { ...button, selected: true };
      return { ...button, selected: false };
    });

    setState(newButtons);
  };

  return (
    <div className="button-filter">
      <h3>
        {title}
        <div className="tooltip-container">
          <MdHelpCircle></MdHelpCircle>
          <div className="tooltip">{tooltip}</div>
        </div>
      </h3>
      <div className="button-container">
        {buttons &&
          buttons.map((button, index) => (
            <ButtonImg {...button} onSelect={onSelect} key={index}></ButtonImg>
          ))}
      </div>
    </div>
  );
};

export default ButtonFilter;
