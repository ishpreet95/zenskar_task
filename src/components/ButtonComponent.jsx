import React from "react";
import { Button } from "@mui/joy";
import { useDispatch } from "react-redux";
import { setDevData } from "../slices/gridSlice";
const ButtonComponent = ({ zoomlvl }) => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="solid"
      sx={{ width: "125px", height: "50px", transform: `scale(${zoomlvl})` }}
      onClick={(e) => {
        dispatch(setDevData(e.target.classList));
      }}
    >
      Button
    </Button>
  );
};
export default ButtonComponent;
