// on codepen.io

// extra: animations, colors, quotation marks icon

// HTML

<html>
  <head>
    <title>Random Quote Machine</title>
    <script src="https://unpkg.com/react-transition-group/dist/react-transition-group.js"></script>

  </head
  <body>
    <div id="quoteMachine">
    </div>
  </body>
</html

// CSS

#quote-box {
  margin: auto;
  width: 500px;
  height: 100%;
  border: 1px dashed grey;
  text-align: center;
  transition: height 1s;
  border-radius: 3px;
  padding: 10px;
}

#text {
  min-height: 80px;
}

#quote-box a.social {
  margin: 10px;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px 6px;
  text-decoration: none;
  color: black;
}
a.social:hover {
  background: grey;
  cursor: pointer;
}

#signature {
  position: relative;
  font-size: 13px;
  color: grey;
  text-align: right;
  width: 98%;
}

// javascript

import React from "https://cdn.skypack.dev/react@17.0.1"
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1"
/* import CSSTransition from "https://cdn.skypack.dev/react-transition-group" */

let testQs = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Your time is limited, so don't waste it living someone else's life.",
  "If life were predictable it would cease to be life, and be without flavor.",
  "Life is what happens when you're busy making other plans.",
  "When you reach the end of your rope, tie a knot in it and hang on.",
  "Always remember that you are absolutely unique. Just like everyone else.",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  "You will face many defeats in life, but never let yourself be defeated.",
  "In the end, it's not the years in your life that count. It's the life in your years.",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."
];
let authors = [
  "Nelson Mandela",
  "Steve Jobs",
  "Eleanor Roosevelt",
  "John Lennon",
  "Franklin D. Roosevelt",
  "Margaret Mead",
  "Benjamin Franklin",
  "Maya Angelou",
  "Abraham Lincoln",
  "Dr. Seuss"]

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "If not now, when?",
      author: "-" + "unknown"
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let randomNumber = Math.floor(Math.random()*10);
    this.setState({
      quote: testQs[randomNumber],
      author: "-" + authors[randomNumber]
    });
  }
  componentDidMount() {
    this.handleClick();
  };
  render() {
    return (
      <div id="quote-box" key="quote-box">
        <h1 id="text">"{this.state.quote}"</h1>
        <h2 id="author">{this.state.author}</h2>
        <a class="social" id="new-quote" onClick={this.handleClick}>New Quote</a>
        <a class="social" target="_top" href={`https://twitter.com/intent/tweet?hastags=quotes&text=${this.state.quote} ${this.state.author}`} id="tweet-quote" text="test">Tweet It</a>
        <div id="signature"><em>built by Vlad</em></div>
      </div>
    );
  }

};



ReactDOM.render(<QuoteMachine />, quoteMachine)

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!
