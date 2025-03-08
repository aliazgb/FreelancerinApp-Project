import React from "react";

function RadioInput({ name, id, value, label, register, validationSchema }) {
  return (
    <div className="flex gap-x-2">
      <input
        {...register(name, validationSchema)}
        type="radio"
        id={id}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default RadioInput;
