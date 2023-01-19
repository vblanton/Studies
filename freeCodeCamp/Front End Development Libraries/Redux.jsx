// Redux, a state managment framework for React and other web libraries/technologies

// Copy an Object with Object.assign
Object.assign() // maps target source object on to another target object
const newObject = Object.assign({}, obj1, obj2); // example usage

const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      const newState = Object.assign({}, defaultState);
      newState.status = 'online';
      return newState;
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);


// Never Mutate State
// state should be given a brand new var to replace it every time to allow for historical state timetravel :)
const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      let newTodos = [...todos];
      newTodos.push(action.todo);
      return newTodos;
    default:
      return state;
  }
};

// Write a Counter with Redux
const INCREMENT = 'INCREMENT'; // Define a constant for increment action types
const DECREMENT = 'DECREMENT'; // Define a constant for decrement action types

const defaultState = 0;

const counterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1
      break;
    case DECREMENT:
      return state - 1
      break;
    default:
      return state;
  }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {
  const action = {
    type: INCREMENT
  };
  return action;
}; // Define an action creator for incrementing

const decAction = () => {
  const action = {
    type: DECREMENT
  };
  return action;
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers

console.log(store.getState());

//Use Middleware to Handle Asynchronous Actions
// using Redux Thunk middleware
// send in the data which needs time to come in, and then ReduxThunk takes care of the rest
Redux.applyMiddleware() // when using the .createStore() function

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

// full example:
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
    dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

// Send Action Data to the Store (rather than just "type")
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  const action = {
    type: ADD_NOTE,
    text: note
  };
  return action;
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

// Combine Multiple Reducers
// In Redux, you create different reducers for different updates to state
// then call them all in a root reducer to update the entire state with createStore()
combineReducers() // method. pass in an object for each reducer

//an example note taking app with two reducers combining states
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});




// Register a Store Listener
// Runs whenever store.dispatch() is run (state is updated)
store.subscribe()

// example:
store.subscribe(counter);

function counter() {
  count++;
}

// Use const for Action Types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

// Use a Switch Statement to Handle Multiple Actions
const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN':
      return {authenticated: true};
      break;
    case 'LOGOUT':
      return {authenticated: false};
      break;
    default :
      return defaultState;
  }
  // Change code above this line
};

// Handle an Action in the Store
// via a reducer function
// A reducer takes state and action as arguments, and it always returns a new state.
// state should remain read-only (unenforced) and so return a new state
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
    if (action.type == 'LOGIN') {
      return state = {login: true}; // don't need to include state = ?
    }
    else {return state = defaultState}; // don't need to include state = ?
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch an Action Event
// stores an object's value in Redux's state object
store.dispatch()
//example:
store.dispatch(loginAction());

// Define an Action Creator
// An action creator is simply a JavaScript function that returns an action.
function actionCreator(action) {
  return action;
};

// Define a Redux Action
// like a message delivering information
// an object, and must carry a type property, and sometimes carries data
const action = {
  type: 'LOGIN'
};

// Get State
var currentState = store.getState();

// create a Redux store, where the state is managed.

const reducer = (state = 5) => {
  return state;
}
const store = Redux.createStore(reducer);

// or, more concisely
const store = Redux.createStore(
  (state = 5) => state
);
