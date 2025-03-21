import React from "react";
import useCategory from "../../hooks/useCategory";
import FilterDropDown from "../../ui/FilterDropDown";

function ProjectsHeader() {
  const { transFormedCategories } = useCategory();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8 ">
      <h1 className="text-lg  font-bold">لیست پروژه ها</h1>
      <div>
        <FilterDropDown
          options={[...transFormedCategories, { value: "all", label: "همه" }]}
          filterField={"category"}
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
