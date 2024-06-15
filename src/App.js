import React from "react";
import { Paper } from "@mui/material";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Paper
      className="App"
      elevation={0}
      sx={{ position: "relative", overflow: "hidden" }}
    >
      <NavBar />
    </Paper>
  );
}

export default App;
