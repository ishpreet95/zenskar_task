import React, { useRef } from "react";
import { Button } from "@mui/joy";
import { useDispatch } from "react-redux";
import { setDevData } from "../slices/gridSlice";
const ButtonComponent = ({ zoomlvl }) => {
  const dispatch = useDispatch();
  const buttonRef = useRef(null);
  const clickHandler = () => {
    const styles = window.getComputedStyle(buttonRef.current);
    const toSet = {
      background: styles.background,
      border: styles.border,
      color: styles.color,
      fontSize: styles.fontSize,
      fontFamily: styles.fontFamily,
      height: styles.height,
      padding: styles.padding,
      margin: styles.margin,
      width: styles.width,
    };
    dispatch(setDevData(toSet));
  };

  return (
    <Button
      variant="solid"
      sx={{ width: "125px", height: "50px", transform: `scale(${zoomlvl})` }}
      ref={buttonRef}
      onClick={clickHandler}
    >
      Button
    </Button>
  );
};
export default ButtonComponent;
