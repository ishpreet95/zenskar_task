import React from "react";
import buttonImg from "./assets/button.png";
import dropdownImg from "./assets/dropdown.png";
import tableImg from "./assets/table.png";

import { ComponentCard } from "./components/ComponentCard";
const componentsData = [
  {
    type: "text",
    icon: <div>Aa</div>,
    title: "Text Input",
    description: "Supports Markdown or HTML",
  },
  {
    type: "button",
    icon: <img style={{ width: "45px" }} src={buttonImg} />,
    title: "Button",
    description: "Trigger actions like run queries, export data etc.",
  },
  {
    type: "dropdown",
    icon: <img style={{ height: "45px" }} src={dropdownImg} />,
    title: "Dropdown",
    description: "Select from a set of options, with a dropdown.",
  },
  {
    type: "table",
    icon: <img style={{ height: "37px", width: "37px" }} src={tableImg} />,
    title: "Table",
    description: "Display tabular data with pagination.",
  },
];

const EditorPicker = (props) => {
  return (
    <div className="editor-picker">
      {componentsData.map((componentData, key) => (
        <ComponentCard key={key} {...componentData} />
      ))}
    </div>
  );
};

export default EditorPicker;
