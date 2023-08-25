import React, { useRef, useState } from "react";
import Draggable from "react-draggable";
import Button from "./ButtonComponent";
import Input from "./InputComponent";
import Select from "./SelectComponent";
import Table from "./TableComponent";
import { moveComponent } from "../slices/componentSlice";
import { useDispatch } from "react-redux";
export const Component = ({ id, type, x, y, handleStart, handleStop }) => {
  const dispatch = useDispatch();
  const targetRef = useRef(null);
  const [position, setPosition] = useState({ x, y });

  let element;
  switch (type) {
    case "button":
      element = <Button />;
      break;
    case "text":
      element = <Input />;
      break;
    case "dropdown":
      element = <Select />;
      break;
    case "table":
      element = <Table />;
    default:
      break;
  }

  element = (
    <div className="drag-target" ref={targetRef}>
      {element}
    </div>
  );
  return (
    <Draggable
      //   handle=".handle"
      position={position}
      grid={[25, 25]}
      scale={1}
      bounds="parent"
      onStart={handleStart}
      onStop={(e, data) => {
        setPosition({ x: data.x, y: data.y }); // Update the position state
        handleStop(e, data);
      }}
      onDrag={() => {
        dispatch(moveComponent({ id, x: position.x, y: position.y }));
      }}
    >
      {element}
    </Draggable>
  );
};
