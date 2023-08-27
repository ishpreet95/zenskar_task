import React from "react";
import { Input } from "@mui/joy";
const InputComponent = ({ zoomlvl }) => {
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
    />
  );
};

export default InputComponent;
