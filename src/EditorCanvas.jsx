import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Component } from "./components/Component";
import { setZoom } from "./slices/gridSlice";
import "./App.css";
const EditorCanvas = (props) => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.component.grid);
  const zoomlvl = useSelector((state) => state.grid.zoomlvl);

  useEffect(() => {
    if (grid.length) {
      localStorage.setItem("grid", JSON.stringify(grid));
    }
  }, [grid]);

  const handleStart = (e) => {
    document.body.classList.add("dragging");
  };

  const handleStop = (e) => {
    document.body.classList.remove("dragging");
  };

  return (
    <div className="editor-canvas">
      <div className="island">
        <div
          style={{ cursor: "pointer", fontSize: "large" }}
          onClick={() => {
            dispatch(setZoom(zoomlvl - 0.1));
          }}
        >
          -
        </div>
        <div style={{ color: "black" }}>{zoomlvl}x</div>
        <div
          style={{ cursor: "pointer", fontSize: "large" }}
          onClick={() => {
            dispatch(setZoom(zoomlvl + 0.1));
          }}
        >
          +
        </div>
      </div>
      {/* <div style={{ transform: `scale(${zoomlvl})` }}> */}
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
      {/* </div> */}
    </div>
  );
};

export default EditorCanvas;
