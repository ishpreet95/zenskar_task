import buttonImg from "./assets/button.png";
import dropdownImg from "./assets/dropdown.png";
import tableImg from "./assets/table.png";

export const getComponentsData = () => {
  return [
    {
      id: 1,
      type: "text",
      icon: <div>Aa</div>,
      title: "Text Input",
      description: "Supports Markdown or HTML",
    },
    {
      id: 2,
      type: "button",
      icon: <img style={{ width: "45px" }} src={buttonImg} />,
      title: "Button",
      description: "Trigger actions like run queries, export data etc.",
    },
    {
      id: 3,
      type: "dropdown",
      icon: <img style={{ height: "45px" }} src={dropdownImg} />,
      title: "Dropdown",
      description: "Select from a set of options, with a dropdown.",
    },
    {
      id: 4,
      type: "table",
      icon: <img style={{ height: "37px", width: "37px" }} src={tableImg} />,
      title: "Table",
      description: "Display tabular data with pagination.",
    },
  ];
};
