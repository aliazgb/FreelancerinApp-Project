import React from "react";
import useCategory from "../../hooks/useCategory";
import Filter from "../../ui/Filter";
import FilterDropDown from "../../ui/FilterDropDown";
const sortOption = [
  {
    label: "Sort by (Latest)",
    value: "latest",
  },
  {
    label: "Sort by (Earliest)",
    value: "earliest",
  },
];

const statusOption = [
  {
    label: "All",
    value: "ALL",
  },
  {
    label: "Open",
    value: "OPEN",
  },
  {
    label: "Closed",
    value: "CLOSE",
  },
];

function ProjectsHeader() {
  const { transFormedCategories } = useCategory();

  return (
    <div className="flex items-center justify-center text-secondary-700 mb-8  w-[100%] lg:justify-start lg:pl-3">
      {/* <h1 className="text-lg  font-bold">Projects List</h1> */}
      <div className="flex items-center gap-x-8 flex-col space-y-2 lg:flex-row lg:space-y-0" >
        <Filter options={statusOption} filterField="status" />
        <FilterDropDown options={sortOption} filterField="sort" />
        <FilterDropDown
          options={[{ value: "ALL", label: "All" }, ...transFormedCategories]}
          filterField="category"
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
