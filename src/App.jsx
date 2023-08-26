import React, { useEffect } from "react";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import EditorCanvas from "./EditorCanvas";
import EditorPicker from "./EditorPicker";
import { useDispatch } from "react-redux";
import { resize, clear, clone } from "./slices/componentSlice";

const App = () => {
  const dispatch = useDispatch();
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
        <MenuIcon fontSize="large" />
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
