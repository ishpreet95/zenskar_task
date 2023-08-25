import React from "react";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";

// You can split your components
import EditorCanvas from "./EditorCanvas";
import EditorPicker from "./EditorPicker";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MenuIcon />
        <p style={{ padding: "0em 0.5em" }}>Design Board</p>
      </header>
      <div className="editor">
        <EditorCanvas />
        <EditorPicker />
      </div>
    </div>
  );
};

export default App;
