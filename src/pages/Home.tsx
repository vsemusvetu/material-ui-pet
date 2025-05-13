import React from "react";
import { Typography, Avatar, Box } from "@mui/material";
import TechStack from "../components/TechStack";
import WorkTimeline from "../components/WorkTimeline";
import Certifications from "../components/Certifications";

const Home: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Avatar sx={{ width: 80, height: 80 }}>JB</Avatar>
        <Typography variant="h4">Hi! I'm Julia 👩‍💻</Typography>
      </Box>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Creative and detail-oriented Front end Developer with over 5 years of hands-on experience in developing and maintaining responsive, cross-browser web applications using React, TypeScript, Angular, HTML5, and CSS3. Proven ability to work in international teams and deliver clean, maintainable code. <br/> Strong eye for design and usability, with experience across the full development lifecycle. Committed to quality, performance, and user experience. 🧙‍♀️
      </Typography>
      <TechStack />
      <WorkTimeline />
      <Certifications />
    </Box>
  );
};

export default Home;