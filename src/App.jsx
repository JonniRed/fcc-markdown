import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

function App() {
  const [editor, setEditor] = useState("");

  const getValue = (e) => {
    let editorValue = e.target.value;
    setEditor(editorValue);
    return editorValue;
  };

  return (
    <div className="container-fluid d-flex flex-column bg-success align-items-center">
      <figure className="mt-5 col-sm-8">
        <figcaption className="w-100 p-2 bg-white">Editor</figcaption>
        <textarea
          name=""
          id="editor"
          className="container border-top rounded-bottom"
          value={editor}
          onChange={getValue}
        ></textarea>
      </figure>
      <figure className="mt-5 mb-5 col-sm-10">
        <figcaption className="w-100 p-2 bg-white">Preview</figcaption>
        <div id="preview" className="container border-top rounded-bottom">
          <ReactMarkdown>{editor}</ReactMarkdown>
        </div>
      </figure>
    </div>
  );
}

export default App;
