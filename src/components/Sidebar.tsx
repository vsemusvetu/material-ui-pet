import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import HomeIcon from "@mui/icons-material/Home";
import { Link as RouterLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const navItems = [
    { to: "/", icon: <HomeIcon />, label: "Home" },
    { to: "/contacts", icon: <EmailIcon />, label: "Contacts" },
    { to: "/surprise", icon: <EmojiEmotionsIcon />, label: "Surprise" }
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: "border-box" }
      }}
    >
      <Toolbar />
      <List>
        {navItems.map(({ to, icon, label }) => (
          <ListItemButton
            key={to}
            component={RouterLink}
            to={to}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;