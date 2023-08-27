import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Component } from "./components/Component";
import { setZoom } from "./slices/gridSlice";
import "./App.css";
const EditorCanvas = (props) => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.component.grid);
  const zoomlvl = useSelector((state) => state.grid.zoomlvl);
  const [dragging, setDragging] = useState(false);
  useEffect(() => {
    if (grid.length) {
      localStorage.setItem("grid", JSON.stringify(grid));
    }
  }, [grid]);

  const handleStart = (e) => {
    // document.body.classList.add("dragging");
    setDragging(true);
  };

  const handleStop = (e) => {
    // document.body.classList.remove("dragging");
    setDragging(false);
  };

  const gridBoxSize = Math.round(25 * Number(zoomlvl));
  console.log(gridBoxSize);
  const backgroundGridStyle = {
    background: `
      linear-gradient(-90deg, #0066ff2e 1px, transparent 1px),
      linear-gradient(#0066ff2e 1px, transparent 1px),
      linear-gradient(-90deg, #0066ff2e 1px, transparent 1px),
      linear-gradient(#0066ff2e 1px, transparent 1px),
      linear-gradient(
        transparent ${gridBoxSize}px,
        #f2f2f2 ${gridBoxSize - 1}px,
        #f2f2f2 ${gridBoxSize * 3 + 1}px,
        transparent ${gridBoxSize * 3}px
      ),
      linear-gradient(-90deg, #0066ff 1px, transparent 1px),
      linear-gradient(
        -90deg,
        transparent ${gridBoxSize}px,
        #f2f2f2 ${gridBoxSize - 1}px,
        #f2f2f2 ${gridBoxSize * 3 + 1}px,
        transparent ${gridBoxSize * 3}px
      ),
      linear-gradient(#0066ff 1px, transparent 1px),
      #f2f2f2
    `,
    backgroundSize: `
      ${gridBoxSize}px ${gridBoxSize}px,
      ${gridBoxSize}px ${gridBoxSize}px,
      ${gridBoxSize * 4}px ${gridBoxSize * 4}px,
      ${gridBoxSize * 4}px ${gridBoxSize * 4}px,
      ${gridBoxSize * 4}px ${gridBoxSize * 4}px,
      ${gridBoxSize * 4}px ${gridBoxSize * 4}px,
      ${gridBoxSize * 4}px ${gridBoxSize * 4}px
    `,
  };

  return (
    <div
      className={"editor-canvas"}
      style={dragging ? backgroundGridStyle : {}}
    >
      <div className="island">
        <div
          style={{ cursor: "pointer", fontSize: "large" }}
          onClick={() => {
            dispatch(setZoom(Number(zoomlvl) - Number(0.1)));
          }}
        >
          -
        </div>
        <div style={{ color: "black", width: "40px" }}>{zoomlvl}x</div>
        <div
          style={{ cursor: "pointer", fontSize: "large" }}
          onClick={() => {
            dispatch(setZoom(Number(zoomlvl) + Number(0.1)));
          }}
        >
          +
        </div>
      </div>
      {/* <div className="canvas" style={{ transform: `scale(${zoomlvl})` }}> */}
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
    // </div>
  );
};

export default EditorCanvas;
