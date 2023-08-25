import React from "react";
import { Select, Option } from "@mui/joy";

const SelectComponent = () => {
  return (
    <Select defaultValue="dog">
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
    </Select>
  );
};

export default SelectComponent;
