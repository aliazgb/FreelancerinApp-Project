import React from "react";
import useCategory from "../../hooks/useCategory";
import Filter from "../../ui/Filter";
import FilterDropDown from "../../ui/FilterDropDown";
const sortOption = [
  {
    label: "مرتب سازی (جدید ترین)",
    value: "latest",
  },
  {
    label: "مرتب سازی (قدیمی ترین)",
    value: "earliest",
  },
];
const statusOption = [
  {
    label: "همه",
    value: "ALL",
  },
  {
    label: "باز",
    value: "OPEN",
  },
  {
    label: "بسته",
    value: "CLOSED",
  },
];
function ProjectsHeader() {
  const { transFormedCategories } = useCategory();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8 ">
      <h1 className="text-lg  font-bold">لیست پروژه ها</h1>
      <div className="flex items-center gap-x-8">
        <Filter options={statusOption} filterField="status" />
        <FilterDropDown options={sortOption} filterField="sort" />
        <FilterDropDown
          options={[{ value: "ALL", label: "همه" }, ...transFormedCategories]}
          filterField="category"
        />
      </div>
    </div>
  );
}

export default ProjectsHeader;
