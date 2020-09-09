import React from "react";
import PropTypes from "prop-types";
import './ToggleSwitch.scss';

/*
Toggle Switch Component
Note: id is required for ToggleSwitch component to function. Name, currentValue, value, Small and onChange are optional.
Usage: <ToggleSwitch id="id" onChange={function (e) { console.log("Checkbox Current State: " + e.target.checked); }} />
*/

const ToggleSwitch = ({ id, name, value, onSwitch, optionLabels, small, disabled }) => {

  const onChange = e => {
    if (typeof onSwitch === "function") onSwitch(e.target.checked);
  };

  return (
      <div className={"toggle-switch" + (small ? " small-switch" : "")}>
        <input
          type="checkbox"
          name={name}
          className="toggle-switch-checkbox"
          id={id}
          checked={value}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {id ? (
          <label className="toggle-switch-label" htmlFor={id}>
            <span
              className={
                disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
              }
              data-yes={optionLabels[0]}
              data-no={optionLabels[1]}
            />
            <span
              className={
                disabled
                  ? "toggle-switch-switch toggle-switch-disabled"
                  : "toggle-switch-switch"
              }
            />
          </label>
        ) : null}
      </div>
    );
}

// Set optionLabels for rendering.
ToggleSwitch.defaultProps = {
    optionLabels: ["Yes", "No"]
  };

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.bool,
  onSwitch: PropTypes.func,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool
};

export default ToggleSwitch;
