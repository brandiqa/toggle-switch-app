import React, { Component } from "react";
import PropTypes from "prop-types";
import './ToggleSwitch.scss';

/*
Toggle Switch Component
Note: id is required for ToggleSwitch component to function. Name, currentValue, defaultChecked, Small and onChange are optional.
Usage: <ToggleSwitch id="id" onChange={function (e) { console.log("Checkbox Current State: " + e.target.checked); }} />
*/

class ToggleSwitch extends Component {
  state = {
    checked: this.props.defaultChecked
  };
  onChange = e => {
    this.setState({
      checked: e.target.checked
    });
    if (typeof this.props.onChange === "function") this.props.onChange();
  };
  render() {
    return (
      <div
        className={"toggle-switch" + (this.props.small ? " small-switch" : "")}
      >
        <input
          type="checkbox"
          name={this.props.name}
          className="toggle-switch-checkbox"
          id={this.props.id}
          checked={this.props.currentValue}
          defaultChecked={this.props.defaultChecked}
          onChange={this.onChange}
          disabled={this.props.disabled}
        />
        {this.props.id ? (
          <label className="toggle-switch-label" htmlFor={this.props.id}>
            <span
              className={
                this.props.disabled
                  ? "toggle-switch-inner toggle-switch-disabled"
                  : "toggle-switch-inner"
              }
              data-yes={this.props.optionLabels[0]}
              data-no={this.props.optionLabels[1]}
            />
            <span
              className={
                this.props.disabled
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
  static defaultProps = {
    optionLabels: ["Yes", "No"]
  };
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  optionLabels: PropTypes.array,
  name: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  small: PropTypes.bool,
  currentValue: PropTypes.bool,
  disabled: PropTypes.bool
};

export default ToggleSwitch;
