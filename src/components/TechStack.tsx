import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

const TechStack: React.FC = () => {
  const stack = ["React", "TypeScript", "Angular", "Tailwind CSS", "Figma", "Jira", "Git", "Docker", "Bootstrap", "Hugo", "HTML5", "CSS3", "Markdown"];

  return (
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h6">Tech Stack</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {stack.map((tech) => (
            <Chip icon={<CodeIcon />} label={tech} color="primary" key={tech} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TechStack;