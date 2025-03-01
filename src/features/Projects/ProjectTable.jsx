import React from "react";
import truncateText from "../../utils/truncateText";
import Empty from "../ui/Empty";
import Loading from "../ui/Loading";
import useOwnerProject from "./useOwnerProject";
import toLocalDateShort from "../../utils/toLocalDateShort";

function ProjectTable() {
  const { projects, isLoading } = useOwnerProject();
  if (isLoading) {
    return <Loading />;
  }
  if (!projects.length > 0) {
    <Empty />;
  }
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr className={project._id} key={project._id}>
              <td>{index + 1}</td>
              <td>{truncateText(project.title, 30)}</td>
              <td>{project.category.title}</td>
              <td>{project.budget}</td>
              <td>{toLocalDateShort(project.deadline)}</td>
              <td>
                <div className="flex flex-wrap items-center gap-2 max-w[200px]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bade badge--secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </td>
              <td>{project.freelancer?.name || "-"}</td>
              <td>
                {project.status == "OPEN" ? (
                  <span className="badge badge--success ">باز</span>
                ) : (
                  <span className="badge badge--danger">بسته</span>
                )}
              </td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
