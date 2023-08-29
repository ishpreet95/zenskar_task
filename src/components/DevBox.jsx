import React from "react";
import { useSelector } from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./DevBox.css";
const DevBox = () => {
  const devData = useSelector((state) => state.grid.devData);
  return (
    <div className="dev">
      <div className="heading">Dev Panel</div>
      <div className="content">
        classes:
        <SyntaxHighlighter
          language="css"
          style={atomOneDarkReasonable}
          wrapLines={true}
          wrapLongLines={true}
        >
          {devData.toString()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DevBox;
