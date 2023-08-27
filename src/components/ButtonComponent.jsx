import React from "react";
import { Button } from "@mui/joy";
const ButtonComponent = ({ zoomlvl }) => {
  return (
    <Button
      variant="solid"
      sx={{ width: "125px", height: "50px", transform: `scale(${zoomlvl})` }}
    >
      Button
    </Button>
  );
};
export default ButtonComponent;
