import React from "react";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";

// You can split your components
import Editor from "./Editor";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MenuIcon />
        <p style={{ padding: "0em 0.5em" }}>Design Board</p>
      </header>
      <Editor />
    </div>
  );
};

export default App;
