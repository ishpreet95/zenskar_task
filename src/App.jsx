import React, { useEffect, useState } from "react";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import EditorCanvas from "./EditorCanvas";
import EditorPicker from "./EditorPicker";
import { useDispatch, useSelector } from "react-redux";
import { resize, clear, clone } from "./slices/componentSlice";
import { setDevMode } from "./slices/gridSlice";
import { Switch } from "@mui/joy";
import CodeIcon from "@mui/icons-material/Code";
const App = () => {
  const dispatch = useDispatch();
  const devMode = useSelector((state) => state.grid.devMode);
  useEffect(() => {
    const grid = JSON.parse(localStorage.getItem("grid"));
    const resizeObserver = new ResizeObserver((entries) => {
      const width = entries[0].borderBoxSize[0].inlineSize;
      dispatch(resize({ width }));
    });
    const editorCanvas = document.querySelector(".editor-canvas");
    resizeObserver.observe(editorCanvas);

    if (grid) {
      dispatch(clone({ grid }));
    }
    return () => {
      resizeObserver.unobserve(editorCanvas);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MenuIcon fontSize="large" />
          <p style={{ padding: "0em 0.5em" }}>Design Board</p>
        </div>
        <div
          style={{
            width: "250px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Switch
            checked={devMode}
            onChange={(e) => {
              dispatch(setDevMode(e.target.checked));
            }}
            size="lg"
            slotProps={{
              thumb: {
                children: <CodeIcon />,
              },
            }}
          />
        </div>
      </header>
      <div className="editor">
        <EditorCanvas />
        <EditorPicker />
      </div>
    </div>
  );
};

export default App;
