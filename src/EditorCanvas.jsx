import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Component } from "./components/Component";
import "./App.css";
const EditorCanvas = (props) => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.component.grid);

  const handleStart = (e) => {
    document.body.classList.add("dragging");
  };

  const handleStop = (e) => {
    document.body.classList.remove("dragging");
  };

  return (
    <div className="editor-canvas">
      {grid.length ? (
        grid.map((item, key) => (
          <Component
            {...item}
            key={key}
            handleStart={handleStart}
            handleStop={handleStop}
          />
        ))
      ) : (
        <div>Drag and Drop here !!</div>
      )}
    </div>
  );
};

export default EditorCanvas;
