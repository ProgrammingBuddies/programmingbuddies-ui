import React from "react";
import { Input, Button } from "antd";
import ProjectList from "../components/ProjectList";
import { generateProjectList } from "../helpers/placeholderData";

const projectList = generateProjectList(10);

export default function ProjectsListScreen() {
  return (
    <div>
      <div className="flex p-20 pb-0">
        <Input className="pr-2" />
        <Button onClick={() => console.log("expands filters")}>A</Button>
      </div>
      <ProjectList projectList={projectList} />
    </div>
  );
}
