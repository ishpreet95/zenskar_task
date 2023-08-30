import React, { useRef } from "react";
import { Input } from "@mui/joy";
import { useDispatch } from "react-redux";
import { setDevData } from "../slices/gridSlice";
const InputComponent = ({ zoomlvl }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const clickHandler = () => {
    const styles = window.getComputedStyle(inputRef.current);
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
      onClick={clickHandler}
      ref={inputRef}
    />
  );
};

export default InputComponent;
