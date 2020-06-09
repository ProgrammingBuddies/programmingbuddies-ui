import React from "react";
import Project from "../components/Project";
import { Card } from "antd";

export default function ProjectList({ projectList }) {
  return (
    <div className="p-12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {projectList.map((project, index) => {
        return (
          <Card key={index}>
            <Project
              key={index}
              title={project.title}
              description={project.description}
            />
          </Card>
        );
      })}
    </div>
  );
}
