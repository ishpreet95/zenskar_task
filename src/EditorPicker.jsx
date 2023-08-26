import React, { useState, useEffect } from "react";

import { clear } from "./slices/componentSlice";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@mui/joy";
import { Search } from "@mui/icons-material";
import { ComponentCard } from "./components/ComponentCard";
import { getComponentsData } from "./utils";
import { filterIds } from "./slices/gridSlice";
const EditorPicker = (props) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  // const componentsData = getComponentData();

  const filteredIds = useSelector((state) => state.grid.filteredIds);
  const componentsData = getComponentsData().filter((component) =>
    filteredIds.includes(component.id)
  );

  useEffect(() => {
    dispatch(filterIds({ text: value }));
  }, [value]);

  return (
    <div className="editor-picker">
      <Input
        color="neutral"
        variant="soft"
        fullWidth
        startDecorator={<Search />}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        placeholder="Search Components"
      />
      {componentsData.map((componentData, key) => (
        <ComponentCard key={key} {...componentData} />
      ))}
      <Button
        onClick={() => dispatch(clear())}
        size="md"
        color="danger"
        variant="soft"
        fullWidth
      >
        Clear Canvas
      </Button>
    </div>
  );
};

export default EditorPicker;
