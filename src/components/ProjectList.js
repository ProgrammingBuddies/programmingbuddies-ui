import React from "react";
import Project from "../components/Project";

export default function ProjectList({ projectList }) {
  return (
    <div className="p-12 grid grid-cols-2 md:grid-cols-4">
      {projectList.map((project, index) => {
        return (
          <Project
            key={index}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </div>
  );
}
