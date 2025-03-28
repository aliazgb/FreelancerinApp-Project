import React from "react";

function RHFSelect({ label, name, register, options, required ,validationSchema ,errors}) {
  return (
    <div>
      <label htmlFor={name} className="text-secondary-700">
        {label} {required && <span>*</span>}
      </label>
      <select
        {...register(name,validationSchema)}
        id={name}
        className="textField__input"
        defaultValue=""
      >
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHFSelect;
