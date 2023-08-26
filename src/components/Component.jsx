import React, { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
import Button from "./ButtonComponent";
import Input from "./InputComponent";
import Select from "./SelectComponent";
import Table from "./TableComponent";
import { moveComponent, setWidth } from "../slices/componentSlice";
import { useDispatch, useSelector } from "react-redux";
export const Component = ({ id, type, x, y, handleStart, handleStop }) => {
  const dispatch = useDispatch();
  const zoomlvl = useSelector((state) => state.grid.zoomlvl);
  const targetRef = useRef(null);
  //   const [position, setPosition] = useState({ x, y });

  //   const adjustedX = position.x / zoomlvl;
  //   const adjustedY = position.y / zoomlvl;

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

  useEffect(() => {
    if (targetRef.current) {
      dispatch(setWidth({ id, width: targetRef.current.offsetWidth }));
    }
  }, [targetRef]);

  const stopHandler = (e, data) => {
    const { x, y } = data;
    dispatch(moveComponent({ id, x, y }));
    handleStop(e, data);
  };
  if (!element) return;
  element = (
    <div className="drag-target" ref={targetRef}>
      {element}
    </div>
  );
  return (
    <Draggable
      //   handle=".handle"
      //   position={{ x: adjustedX, y: adjustedY }}
      position={{ x, y }}
      grid={[25, 25]}
      //   scale={1 / zoomlvl}
      scale={1}
      bounds="parent"
      onStart={handleStart}
      //   onStop={(e, data) => {
      //     dispatch(moveComponent({ x: data.x * zoomlvl, y: data.y * zoomlvl })); // Update the position state
      //     handleStop(e, data);
      //   }}
      onStop={stopHandler}
      onDrag={() => {
        // dispatch(moveComponent({ id, x: adjustedX, y: adjustedY }));
        dispatch(moveComponent({ id, x: x, y: y }));
      }}
    >
      {element}
    </Draggable>
  );
};
