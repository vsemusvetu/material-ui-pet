import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import ProjectPage from "../components/ProjectPage";

const Project: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ProjectPage />
    </div>
  );
};

export default Project;