import React from "react";

function RadioInput({ name, id, value, onChange, checked ,label}) {
  return (
    <div className="flex gap-x-2">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
