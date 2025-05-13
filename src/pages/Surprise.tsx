import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import JokeDialog from "../components/JokeDialog";

const Surprise: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Typography variant="h5">Wanna hear a joke? 😏</Typography>
      <Button onClick={() => setOpen(true)} variant="outlined" sx={{ mt: 2 }}>
        Yes, hit me!
      </Button>
      <JokeDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Surprise;