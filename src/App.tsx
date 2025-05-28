import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Surprise from "./pages/Surprise";
import Project from "./pages/Project";

const App = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 6 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/surprise" element={<Surprise />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;