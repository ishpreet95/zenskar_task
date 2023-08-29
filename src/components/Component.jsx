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
  const [position, setPosition] = useState({ x, y });

  const adjustedX = Math.round(position.x * zoomlvl);
  const adjustedY = Math.round(position.y * zoomlvl);

  let element;
  switch (type) {
    case "button":
      element = <Button zoomlvl={zoomlvl} />;
      break;
    case "text":
      element = <Input zoomlvl={zoomlvl} />;
      break;
    case "dropdown":
      element = <Select zoomlvl={zoomlvl} />;
      break;
    case "table":
      element = <Table zoomlvl={zoomlvl} />;
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
      position={{ x, y }}
      grid={[
        Math.round(25 * Number(zoomlvl)),
        Math.round(25 * Number(zoomlvl)),
      ]}
      scale={1}
      bounds="parent"
      onStart={handleStart}
      onStop={(e, data) => {
        dispatch(moveComponent({ id, x: data.x, y: data.y, zoomlvl }));
        setPosition((prev) => ({
          ...prev,
          x: data.x,
          y: data.y,
        }));

        handleStop(e, data);
      }}
      // onStop={stopHandler}
      onDrag={() => {
        // dispatch(moveComponent({ id, x: adjustedX, y: adjustedY }));
        setPosition((prev) => ({ ...prev, x: adjustedX, y: adjustedY }));
        // dispatch(moveComponent({ id, x: x, y: y }));
      }}
    >
      {element}
    </Draggable>
  );
};
