import React from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ options, filterField }) {
  const [searchParams, setSearchParamas] = useSearchParams();
  const currentFieltr = searchParams.get(filterField) || options.at(0).value;
  const handleChange = (value) => {
    searchParams.set(filterField, value);
    setSearchParamas(searchParams);
  };
  return (
    <div className="flex items-center gap-x-2 text-xs">
      <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg">
        {options.map((item) => {
          const isActive = item.value === currentFieltr;
          return (
            <button
              key={item.value}
              onClick={() => handleChange(item.value)}
              className={`whitespace-nowrap rounded-md px-4 py-2 font-bold transition-all duration-300
                ${
                  isActive
                    ? "bg-primary-900 text-white"
                    : "bg-secondary-0 text-secondary-800"
                }
                `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
