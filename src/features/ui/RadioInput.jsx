import React from "react";

function RadioInput({ name, id, value, onChange, checked }) {
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
      <label htmlFor="OWNER">کارفرما</label>
    </div>
  );
}

export default RadioInput;
