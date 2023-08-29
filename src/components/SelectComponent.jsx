import React from "react";
import { Select, Option } from "@mui/joy";
import { useDispatch } from "react-redux";
import { setDevData } from "../slices/gridSlice";
const SelectComponent = ({ zoomlvl }) => {
  const dispatch = useDispatch();

  return (
    <Select
      defaultValue="dog"
      sx={{ width: "250px", height: "50px", transform: `scale(${zoomlvl})` }}
      onClick={(e) => {
        dispatch(setDevData(e.target.classList));
      }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
    </Select>
  );
};

export default SelectComponent;
