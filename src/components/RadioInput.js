import React from "react";

function RadioInput({ name, label, value, checked, setter }) {
  return (
    <>
      <input
        type="radio"
        className="btn-check"
        id={`option${value}`}
        name={name}
        value="21"
        onChange={() => setter(value)}
        checked={checked === value}
        autoComplete="off"
      />
      <label className="btn btn-outline-success" htmlFor={`option${value}`}>
        {label}
      </label>
    </>
  );
}

export default RadioInput;
