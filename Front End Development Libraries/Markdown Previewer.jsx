// done on codepen.io

// html

<html>
  <head>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/calculuschild/marked-extended-tables/lib/index.mjs"></script>
  </head>
  <body>
    <div id="markdown"></div>
  </body>
</html>

// CSS

#markdown {
  position: absolute;
}

#editor {
  border: 1px solid black;
  margin: 0;
  padding: 0;
  width: 30vw;
  height: 88vh;
  margin-left: 50px;
  margin-right: 10px;
  overflow: scroll;
  padding: 4px;
}
#preview {
  border: 1px solid black;
  width: 55vw;
  height: 88vh;
  overflow: scroll;
  padding: 4px;
}

#left {
  float: left;
}

#left h3 {
  margin-left: 50px;
}

#right {
  float: right;
}

#floating-text {
  position: absolute;
  top: 40px;
  right: 0;
  font-size: 14px;
}

/* HTML markdown elements */

code {
  background-color: #bbb;
  display: inline-block;
}

table {
  border: 1px solid black;
  border-collapse: collapse;
}
td, tr {
  border: 1px dashed black;
  padding: 3px;
}
th {
  border-bottom: 2px solid black;
  padding: 2px;
}

blockquote {
  border-left: 4px solid black;
  padding-left: 2px;
}
#preview img {
  max-width: 250px;
}

// JS

import React from "https://cdn.skypack.dev/react@17.0.1"
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1"
import Parser from "https://cdn.skypack.dev/html-react-parser@3.0.4";
// import $ from "https://cdn.skypack.dev/jquery@3.6.1";



class Markdown extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      input: `# Welcome to my React Markdown Previewer!

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

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
    };
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    let markedText = marked.parse(this.state.input);
    marked.setOptions({
      gfm: true,
      breaks: true
    });
    return(
    <div id="markdown-inside">
        <div id="left">
          <h3>Markdown:</h3>
          <textarea
            id="editor"
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
        <div id="right">
          <h3>Preview:</h3>
          <div id="preview">
            {Parser(markedText)}
          </div>
        </div>
        <div id="floating-text"><em>built by Vlad</em></div>
    </div>
    );
  }
};

class Preview extends React.Component {
    constructor(props) {
    super(props);
    }
}


ReactDOM.render(<Markdown />, markdown)
