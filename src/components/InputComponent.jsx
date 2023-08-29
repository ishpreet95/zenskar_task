import React from "react";
import { Input } from "@mui/joy";
import { useDispatch } from "react-redux";
import { setDevData } from "../slices/gridSlice";
const InputComponent = ({ zoomlvl }) => {
  const dispatch = useDispatch();

  return (
    <Input
      size="md"
      variant="soft"
      placeholder="Type here..."
      sx={{
        fontWeight: "400",
        width: "250px",
        height: "50px",
        transform: `scale(${zoomlvl})`,
      }}
      onClick={(e) => {
        dispatch(setDevData(e.target.classList));
      }}
    />
  );
};

export default InputComponent;
