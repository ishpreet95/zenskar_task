import React from "react";
import { useSelector } from "react-redux";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./DevBox.css";
const DevBox = () => {
  const devData = useSelector((state) => state.grid.devData);
  const json = JSON.stringify(devData);
  const unquoted = json.replace(/"([^"]+)":/g, "$1:");
  const stringed = String(devData);
  return (
    <div className="dev">
      <div className="heading">Dev Panel</div>
      <div className="content">
        Styles
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDarkReasonable}
          // wrapLines={true}
          wrapLongLines={true}
        >
          {/* {String(devData)} */}
          {unquoted}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default DevBox;
