import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

interface JokeDialogProps {
  open: boolean;
  onClose: () => void;
}

const JokeDialog: React.FC<JokeDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>😂 A Dev Joke</DialogTitle>
      <DialogContent>
        <Typography>Why did the React developer stay calm? Because they had a lot of state. 😌</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Haha, ok</Button>
      </DialogActions>
    </Dialog>
  );
};

export default JokeDialog;
