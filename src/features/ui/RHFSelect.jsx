import React from "react";

function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <select id={name} {...register(name)} className="textField__input">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RHFSelect;
