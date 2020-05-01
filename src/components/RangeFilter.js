import React from "react";
import { Range } from "rc-slider";

import MdHelpCircle from "react-ionicons/lib/MdHelpCircle";

import "./RangeFilter.css";
import "rc-slider/assets/index.css";

const RangeFilter = ({
  title,
  tooltip,
  from,
  to,
  imgFrom,
  imgTo,
  range,
  setRange,
  step,
}) => {
  return (
    <div className="range-filter">
      <h3>
        {title}
        <div className="tooltip-container">
          <MdHelpCircle></MdHelpCircle>
          <div className="tooltip">{tooltip}</div>
        </div>
      </h3>
      {imgFrom && imgTo && (
        <div className="range-images opposite">
          <img
            src={require(`../static/images/${imgFrom}`)}
            alt="Small oneƒ"
          ></img>
          <img src={require(`../static/images/${imgTo}`)} alt="Big one"></img>
        </div>
      )}
      <Range
        min={from}
        max={to}
        value={range}
        onChange={(value) => {
          setRange(value);
        }}
        step={step || 0.1}
        allowCross={false}
      ></Range>
      <div className="slider-inputs opposite">
        <input
          step={`${step ? step : ".1"}`}
          min={`${from}`}
          max={`${to}`}
          type="number"
          value={range[0]}
          onChange={(e) => {
            if (e.target.value > range[1])
              return setRange([range[1], range[1]]);

            setRange([e.target.value, range[1]]);
          }}
        ></input>
        <input
          step={`${step ? step : ".1"}`}
          min={`${from}`}
          max={`${to}`}
          type="number"
          value={range[1]}
          onChange={(e) => {
            if (e.target.value < range[0])
              return setRange([range[0], range[0]]);
            setRange([range[0], e.target.value]);
          }}
        ></input>
      </div>
    </div>
  );
};

export default RangeFilter;
