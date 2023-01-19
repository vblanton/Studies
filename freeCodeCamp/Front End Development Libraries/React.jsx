// React is an Open Source view library created and maintained by Facebook.
// It's a great tool to render the User Interface (UI) of modern web applications.

// review: DOM, this keyword

// Reactjs.org Docs

const root = ReactDOM.createRoot(document.getElementById('root')); // link to a div "root" where all React code will go
const element = <h1>Hello, world</h1>; // create a React object element
root.render(element); // render a react object/element to the root div
root.render(<h1>Hello, world</h1>); // render some html into the root div
{new Date().toLocaleTimeString()} // a clock via JSX
setInterval(element, 1000); // re-render a React element every second

// React components (always capitalized): like javascript functions. accept props inputs and return react elements describing what should appear on screen
// it is smart to make multiple small components and use them in parent components with jsx inclusions
// Props (object) are read-only. You can't modify the props passed in. In other words, keep functions pure (functional programming)

function Welcome(props) {return <h1>Hello, {props.name}</h1>;} // function component
// ES6 class component (Classes are a javacript template for creating objects.)
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
const element = <Welcome name="Sara" />; // an element representing a user defined component, name="Sara" are passed in as the props
// To convert a function component to a class in five steps:
//    Create an ES6 class, with the same name, that extends React.Component.
//    Add a single empty method to it called render().
//    Move the body of the function into the render() method.
//    Replace props with this.props in the render() body.
//    Delete the remaining empty function declaration.

// State (object)
// It is important to mount and unmount to free up resources taken by components when they are destroyed

componentDidMount() {  } // lifecycle method that runs after component output has been rendered to the DOM
componentWillUnmount() {  } // lifecycle method that runs if component is removed from the DOM

this.state // do not modify directly after being set up
this.setState() // to update/modfiy local state, lets React know to update the DOM associated with that components state

// state is updated asynchronously, so if you need to calculate something off of state, use setState() as a function:
// and pass in state as a variable at the time it is processed (arrow function example):
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

<FormattedDate date={this.state.date} /> // pass state as props to a child component

// Events
// all events: https://reactjs.org/docs/events.html
<button onClick={activateLasers}> Activate Lasers </button> // pass JSX to an event

// preventing default usage of an event
// also "e", the synthetic event, which normalizes event behaviour across browsers:
function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }
  return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }

this.handleClick = this.handleClick.bind(this); // binding to this in important so that when the function is called later in render() you can use this.functionName and it runs from code in the correct scope/local
// alternatively: if you don't like using bind(),
// you can use a public instance field in a class:
handleClick = () => { console.log('this is:', this);  };

// two ways to pass an extra parameter to an event handler:
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> // arrow function method
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> // bind method

// Conditional rendering

if/else
(true && expression) // evaluates to expression
true ? expression : expression // ternary operators
return null // will prevent component from rendering, or hide itself
// Returning null from a component’s render method does not affect the firing of the component’s lifecycle methods.
// For instance componentDidUpdate will still be called.

// Lists and Keys

// using map() to render out a list
// and giving them each a key
// Keys help React identify which items have changed
// Keys should be given to the elements inside the array to give the elements a stable identity:
// if none is assigned, react will make an index for them, but this can cause performance problems
// Keys used within arrays should be unique among their siblings. However, they don’t need to be globally unique.
// keys are internally used by React, and not rendered to the code. for that, use id=
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>      // and give them each a key
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);

// inline JSX with map()

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()}
                  value={number} />
      )}
    </ul>
  );
}

// Forms / Controlled Components

// HTML forms have their own state, and so make it React's state to have a single source of truth
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

// <textarea> form element's value is in state instead
<textarea value={this.state.value} onChange={this.handleChange} />

// select
this.state = {value: 'coconut'};
/* ... */
handleChange(event) {    this.setState({value: event.target.value});  }
/* ... */
<select value={this.state.value} onChange={this.handleChange}>            <option value="grapefruit">Grapefruit</option>
  <option value="lime">Lime</option>
  <option value="coconut">Coconut</option>
  <option value="mango">Mango</option>
</select>

<select multiple={true} value={['B', 'C']}> // you can pass an array into value to select multiple options

// When you need to handle multiple controlled input elements, you can add a name attribute to each element and let the handler function choose what to do based on the value of event.target.name.
this.setState({
  [name]: value // using ES6 computed property name syntax
});
/* ... */
<label>
  Is going:
  <input
    name="isGoing"
    type="checkbox"
    checked={this.state.isGoing}
    onChange={this.handleInputChange} />
</label>

// in some situations, controlled components are annoying, like when migrating to React or combining it with another library, and so you can look into uncontrolled components:https://reactjs.org/docs/uncontrolled-components.html
// https://formik.org/ is an opensource addition to React, to keep track of visited fields, validation, and handling form submission

// Lifting State Up

// In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it.
// This is called “lifting state up”. We will remove the local state from the child and move it into the parent instead.
// https://reactjs.org/docs/lifting-state-up.html

// freeCodeCamp

// Render React on the Server with renderToString
// There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines. Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.
renderToString()
ReactDOMServer.renderToString(<App />) // example render App to the server. ReactDomServer is a global object

// using filter and map in React to filter users "online":
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(x => x.online == true); // Change this line
    const renderOnline = usersOnline.map(x => <li key={x.username}>{x.username}</li>); // Change this line
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

//giving items unique keys to reference later using map():
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(x => <li key={"framework-" + x}>{x}</li>);
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

// Use a Ternary Expression for Conditional Rendering (within JSX)
{condition ? expressionIfTrue : expressionIfFalse} // example

{
  this.state.userAge == ''
  ? buttonOne
  : this.state.userAge < 18
  ? buttonThree
  : buttonTwo
}

// Use && for a More Concise Conditional within JSX
{condition && <p>markup</p>} // if left is true, right is automatically true by it's nature

render() {
    // Change code below this line
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }

// Use Advanced JavaScript in React Render Method
// keep it in the render methods before the return() statement and then reference it in the return via JSX
// or use an if/else statment there too
snippet:
render() {
    function toggle(display) {
      if (display){
        return (<h1>Display!</h1>);
      } else {
        return "";
      }
    }
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {toggle(this.state.display)}
       </div>
    );
  // more concise use of && above

// inline styles via JSX
// font-size and other kebab-case style elements are rewritten as camelCase
// set them as a javascript object, rather than a string like in HTML
// if it is a px number value, px is assumed, otherwise you must wrap the number in quotes: "24em"
// all other values are in quotes
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

// assign styles to an object to keep the code cleaner:
const styles = {color: "purple", fontSize: 40, border: "2px solid purple"};
class Colorful extends React.Component {
  render() {
    return (
      <div style={styles}>Style Me!</div>
    );
  }
};
// use shouldComponentUpdate to update only if the prop is different:
nextProps // compare current to future
nextState

// update the component is props is an even number
shouldComponentUpdate(nextProps, nextState) {
  console.log('Should I update?');
  if (nextProps.value % 2 == 0) {
    return true;
  } else {
    return false;
  }

// event listeners adding and removing:
componentDidMount() {
  document.addEventListener("keydown", this.handleKeyPress)
}
componentWillUnmount() {
  document.removeEventListener("keydown", this.handleKeyPress)
}

// lifecycle methods:
componentWillMount() // deprecated as of v17 (React is v18)
componentDidMount() // called after a component is added to the DOM
shouldComponentUpdate()
componentDidUpdate()
componentWillUnmount() // called after a component is removed from the DOM

// pass a handler function to a child component as props:
handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
// render/return of parent MyApp
<GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
// render/return section of GetInput:
return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );

// you can pass state as props to a child component
<Child {name = this.state.name} /> // to child
<h1>{this.props.name}</h1> // in child

// have an input become the state and the state become the input:
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange (event) {
    this.setState({
      input: event.target.value
    })
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input onChange={this.handleChange} value={this.state.input}></input>
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

// visibility code:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState(state => {
      if (state.visibility == true) {
        return { visibility: false };
      } else {
        return { visibility: true };
      }
    });
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
// or aternateively:
toggleVisibility() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

// because of asynchronous state updates, you need to pass in state or props:
this.setState(state => ({ // note the object literal is wrapped in paranthesis otherwise jsavascript thinks it is a block of code
  counter: state.counter + 1
}));

// this is WRONG:
this.setState({
  counter: this.state.counter + this.props.increment
});

// onClick method:
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick={this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

// setState. never modify state directly, use setState().
// it also gets bundled asychronously with other state updates to conserve performance
this.setState() // pass in object with key value pairs

this.setState({
  username: 'Lewis'
});

// you can write javascript directly in the render() statement before the return() statement.. assign it to variables and access it in render

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
      const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};

// State: any data your application needs to know about, and can change. state changes update web UI
// declared in a component class, in its constructor, as a javascript object
// states are isolated to the component you declare them in, unless passed to a child as props

this.state = {} // you can update it, pass it as props to a child...

class StatefulComponent extends React.Component { // a stateful component is a component that has a state, accessible within the render
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state = { firstName: 'San Francisco'}
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

// ReactDOM is React's rendering API the renders JSX to the HTML DOM
// everything in React is a component
// React requires function names to begin with a capital letter

ReactDOM.render(componentToRender, targetDomNode) // render a JSX element to the DOM with React. declare after JSX element declerations
ReactDOM.render(JSX, document.getElementById("challenge-node")) // render a JSX element to the DOM example and target an element by Id
ReactDOM.render(<ComponentToRender />, targetNode) // render a React component to the DOM

// a stateless react component (first type of component)
const MyComponent = function() {
  return ( <div> String of Text. </div> )
}

// a dynamic react component defined with the ES6 class syntax
// the constructor, props and super are all standard stuff to be included
class Kitten extends React.Component { // gets useful features from React.Component
  constructor(props) { // special method used during the initialization of objects created with the class keyword
    super(props); // super references the parent of the constructor class, or React.Component
  }
  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
// include component modules in a parent component
// You can render JSX elements, stateless functional components, and ES6 class components within other components.
// you can also nest components in other components and they will be included in the parent component
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)

// props, or properties, similar to passing in a function

const Welcome = (props) => <h1>Hello, {props.user}!</h1> // Welcome has a component passed to it, named user

<App>
  <Welcome user='Mark' /> // pass user to Welcome
</App>

// props with a class component uses this.
{this.props.propname}

// pass an array with JSX
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
// join the array with a defined spacer
const ChildComponent = (props) => <p>{props.colors.join(', ')}</p>
// or
return <p>{props.tasks.join(", ")}</p>

// Assigning a default props if none assigned (but not null) after the component code
MyComponent.defaultProps = { location: 'San Francisco' }

// use PropTypes to define which types of values are allowed (array, function, etc)
// func, bool, array, number, object, string, symbol (and more such as nodes, elements, ...)
// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
import PropTypes from 'prop-types'; // imported independently
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired } // function, and is required


// JSX is a syntax extention to Javascript that allows you to write HTML within Javascript
// JSX is compiled into javascript. Babel is popular (transpiler)

// JSX needs a parent object for siblings (div with p's inside of it)
// all event references and attributes are camelCase
// Any JSX element must be closed and can be written with a self-closing tag <br />, <hr />, or even a self closing <div /> etc.

// JSX:
{ } // code to treat as javascript
ReactDOM.render(JSX, document.getElementById('root')) // places JSX within React's own lightweight representation of the DOM
const JSX = <div></div>; // define a new const JSX and fill it with html
{/* */} // comments
<div className="myDiv"> // instead of class, which is reserved for Javascript
