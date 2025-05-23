import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";

const editorValue = document.getElementById("editor");
const preview = document.getElementById("preview");
const firstLoadText = `
# A first-level heading

  ## A second-level heading 

  Use \`git status\` to list all new or modified files that haven't yet been committed. 

  Some basic Git commands are: 
  \`\`\`
  git status
  git add 
  git commit
  \`\`\`\

  This site was built using [GitHub Pages](https://pages.github.com/).

  List items:
  - George Washington
  * John Adams
  + Thomas Jeffersonn

  > Text that is a blockquote
  
  ![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)
  
  **This is bold text**`;

function App() {
  const [editor, setEditor] = useState(firstLoadText);

  const getValue = (e) => {
    let editorValue = e.target.value;
    setEditor(editorValue);
    return editorValue;
  };
  console.log(editor === firstLoadText);
  return (
    <div className="d-flex flex-column bg-success align-items-center">
      <figure className="mt-5 col-sm-8">
        <figcaption className="w-100 p-2 bg-white">Editor</figcaption>
        <textarea
          name=""
          id="editor"
          className="container border-top rounded-bottom"
          value={editor}
          onChange={getValue}
          onClick={() => setEditor("")}
        >
          {editor}
        </textarea>
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
