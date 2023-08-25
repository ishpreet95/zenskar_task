import React from "react";
import "./Editor.css";

const EditorCanvas = (props) => {
  return (
    <div className="editor-canvas">
      <div>Put the drag and drop interface over here!</div>
    </div>
  );
};

const EditorPicker = (props) => {
  return (
    <div className="editor-picker">
      <button> Create a button </button>
      <button> Create a text input </button>
      <button> Create a dropdown </button>
      <button> Create a table </button>
    </div>
  );
};

const Editor = (props) => {
  return (
    <div className="editor">
      <EditorCanvas />
      <EditorPicker />
    </div>
  );
};

export default Editor;
