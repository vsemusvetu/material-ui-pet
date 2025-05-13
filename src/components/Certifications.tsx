import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Certifications: React.FC = () => {
  return (
    <Accordion sx={{ mt: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Certificates 📜</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          <li>Full Stack Developer (2020)</li>
          <li>HTML & CSS Advanced (2023)</li>
          <li>Python Intensive (2023)</li>
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default Certifications;