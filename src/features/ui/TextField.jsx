import React from "react";

function TextField({
  label,
  name,
  type = "text",
  register,
  required,
  validationSchema,
  errors,
}) {
  return (
    <div className="mb-1">
      <label className="mb-1" htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        type={type}
        className="py-2 px-4 w-full rounded-xl text-secondary-900 border border-gray-300 
        hover:border-primary-300 focus:border-primary-300  transition-all duration-300 ease-in-out focus:bg-white focus:shadow-lg
        focus:shadow-primary-200 bg-gray-100"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
