import React, { useEffect, useState } from "react";
import { Input } from "antd";
import ProjectList from "../components/ProjectList";
import { generateProjectList } from "../helpers/placeholderData";

const { Search } = Input;
const projectList = generateProjectList(10);

export default function ProjectsListScreen() {
  const [filteredProjects, setFilteredProjects] = useState(projectList);

  const onSearch = (value) => {
    let filterProjects = projectList.filter(
      (pro) => pro.title.includes(value) || pro.description.includes(value)
    );
    setFilteredProjects(filterProjects);
  };

  return (
    <div>
      <div className="flex p-20 pb-0">
        <div className="w-full">
          <Search onSearch={onSearch} />
        </div>
      </div>
      <ProjectList projectList={filteredProjects} />
    </div>
  );
}
