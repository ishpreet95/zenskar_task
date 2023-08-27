import React from "react";
import { Select, Option } from "@mui/joy";

const SelectComponent = ({ zoomlvl }) => {
  return (
    <Select
      defaultValue="dog"
      sx={{ width: "250px", height: "50px", transform: `scale(${zoomlvl})` }}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
    </Select>
  );
};

export default SelectComponent;
