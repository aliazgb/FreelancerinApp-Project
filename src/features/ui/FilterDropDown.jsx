import React from "react";
import { useSearchParams } from "react-router-dom";

function FilterDropDown({ options, filterField }) {
  const [searchParams, setSearchParamas] = useSearchParams();
  const value = searchParams.get(filterField) || "";
  const handleChange = (e) => {
    searchParams.set(value, e.target.value);
    setSearchParamas(searchParams);
  };
  return (
    <select
      value={options.value}
      className="textField__input py-2 text-xs"
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default FilterDropDown;
