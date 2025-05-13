import React from "react";
import { Typography, Box, Link } from "@mui/material";

const Contacts: React.FC = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>Contact Me</Typography>
      <Typography>Email: <Link href="mailto:vsemusvetu3112@gmail.com">vsemusvetu3112@gmail.com</Link></Typography>
      <Typography>Telegram: <Link href="https://t.me/vsemusvetu" target="_blank">@vsemusvetu</Link></Typography>
      <Typography>LinkedIn: <Link href="https://linkedin.com/in/juliya-badrtdinova" target="_blank">juliya-badrtdinova</Link></Typography>
    </Box>
  );
};

export default Contacts;