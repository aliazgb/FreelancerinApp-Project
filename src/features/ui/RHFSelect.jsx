import React from "react";

function RHFSelect({ label, name, register, options, required }) {
  console.log(options);
  return (
    <div>
      <label htmlFor={name}>
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
