import React, { useRef } from "react";
import { Select, Option } from "@mui/joy";
import { useDispatch } from "react-redux";
import { setDevData } from "../slices/gridSlice";
const SelectComponent = ({ zoomlvl }) => {
  const dispatch = useDispatch();
  const selectRef = useRef(null);
  const clickHandler = () => {
    const styles = window.getComputedStyle(selectRef.current);
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
    <Select
      defaultValue="dog"
      sx={{ width: "250px", height: "50px", transform: `scale(${zoomlvl})` }}
      onClick={clickHandler}
      ref={selectRef}
    >
      <Option value="dog">Dog</Option>
      <Option value="cat">Cat</Option>
    </Select>
  );
};

export default SelectComponent;
