import { useState, useRef } from "react";
import "./ComponentCard.css";
import { Divider } from "@mui/joy";
import { useDispatch } from "react-redux";
import Draggable from "react-draggable";
import { addComponent } from "../slices/componentSlice";
export const ComponentCard = ({ type, icon, title, description }) => {
  const dispatch = useDispatch();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const componentRef = useRef(null);
  return (
    <Draggable
      onDrag={(e, data) => {
        setPosition({ x: data.x, y: data.y });
      }}
      onStop={(e) => {
        const { pageX, pageY } = e;
        const editorCanvas = document.querySelector(".editor-canvas");

        const canvasRect = editorCanvas.getBoundingClientRect();
        const canvasX = canvasRect.x;
        const canvasY = canvasRect.y;

        const x = pageX - canvasX;
        const y = pageY - canvasY;

        setPosition({ x: 0, y: 0 });

        if (x < 0 || y < 0 || x > canvasRect.width || y > canvasRect.height)
          return;
        const id = Date.now();
        dispatch(addComponent({ id, type, x, y }));
      }}
      position={position}
    >
      <div className="componentCard" ref={componentRef}>
        <div className="left">{icon}</div>
        <div className="right">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </Draggable>
  );
};
