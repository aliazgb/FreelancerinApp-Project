import React from "react";

function TextField({ label, name, value, onChange }) {
  return (
    <div className="mb-1">
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type="number"
        className="py-2 px-4 w-full rounded-xl text-secondary-900 border border-gray-300 
        hover:border-primary-300 focus:border-primary-300  transition-all duration-300 ease-in-out focus:bg-white focus:shadow-lg
        focus:shadow-primary-200 bg-gray-100"
      />
    </div>
  );
}

export default TextField;
