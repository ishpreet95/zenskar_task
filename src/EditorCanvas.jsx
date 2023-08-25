import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Component } from "./components/Component";
const EditorCanvas = (props) => {
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.component.grid);
  return (
    <div className="editor-canvas">
      {grid.length ? (
        grid.map((item, key) => <Component {...item} key={key} />)
      ) : (
        <div>Drag and Drop here !!</div>
      )}
    </div>
  );
};

export default EditorCanvas;
