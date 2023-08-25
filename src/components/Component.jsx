import React from "react";
import Draggable from "react-draggable";
import Button from "./ButtonComponent";
import Input from "./InputComponent";
import Select from "./SelectComponent";
import Table from "./TableComponent";
export const Component = ({ id, type, x, y }) => {
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
  return (
    <Draggable
      handle=".handle"
      position={{ x, y }}
      grid={[25, 25]}
      scale={1}
      bounds="parent"
      //   onStart={handleStart}
      //   onStop={stopHandler}
      //   onDrag={() => {
      //     dispatch(move({ id, x, y }));
      //   }}
    >
      {element}
    </Draggable>
  );
};
