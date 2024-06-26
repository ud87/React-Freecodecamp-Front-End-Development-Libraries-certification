import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { marked } from "marked";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import "./App.css";

// Moved `defaultText` outside the component
const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

function App() {
  const [isEditorMaximized, setIsEditorMaximized] = useState(false);
  const [isPreviewMaximized, setIsPreviewMaximized] = useState(false);
  const [markdown, setMarkdown] = useState(defaultText);

  function handleInputChange(event) {
    setMarkdown(event.target.value);
  }

  function editorToggleFullscreen() {
    setIsEditorMaximized(!isEditorMaximized);
    if (isPreviewMaximized) setIsPreviewMaximized(false);
  }

  function previewToggleFullScreen() {
    setIsPreviewMaximized(!isPreviewMaximized);
    if (isEditorMaximized) setIsEditorMaximized(false);
  }

  return (
    <div className="container">
      <div
        className={`editor-wrap ${isEditorMaximized ? "maximized" : ""} ${
          isPreviewMaximized ? "hide" : ""
        }`}
      >
        <div className="toolbar">
          <span>Editor</span>
          <i
            className="fa-solid fa-maximize"
            onClick={editorToggleFullscreen}
          ></i>
        </div>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div
        className={`preview-wrap ${isPreviewMaximized ? "maximized" : ""} ${
          isEditorMaximized ? "hide" : ""
        }`}
      >
        <div className="toolbar">
          <span>Preview</span>
          <i
            className="fa-solid fa-maximize"
            onClick={previewToggleFullScreen}
          ></i>
        </div>
        <div
          className="preview"
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        />
      </div>
    </div>
  );
}

export default App;
