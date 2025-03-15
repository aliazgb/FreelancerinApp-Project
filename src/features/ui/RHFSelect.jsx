import React from "react";

function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="text-secondary-700">
        {label} {required && <span>*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
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
