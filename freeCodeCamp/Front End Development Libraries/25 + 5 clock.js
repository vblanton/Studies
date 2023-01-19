//HTML

<html>
  <head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous">
  </head>
  <body>
    <div id="clockcontainer">
    </div>
    <div id="signature">
      <em>a "25 + 5" clock <br />built by vladislav/apropos</em>
    </div>
  </body>

</html>

//CSS

#clock {
  width: 320px;
  height: 100%;
  margin: auto;
}
#title {
  text-align: center;
  margin: 30px 0 20px 0;
  font-size: 24px;
  font-weight: bold;
}
#timer {
  width: 300px;
  height: 300px;
  border: 10px solid black;
  border-radius: 50%;
  text-align: center;
}

#timer-label {
  margin-top: 24%;
  font-weight: bold;
  font-size: 22px;
}
#time-left {
  margin: 10px;
  font-size: 60px;
}
#timerbuttons {
  margin: 5px;
}
#session-label, #break-label {
  display: inline-block;
  width: 50%;
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
}
button.b-large {
  margin: 5px;
  width: 50px;
  height: 30px;
  background: #DDD;
  border-radius: 6px;
  border: 1px solid black;
}
button.b-small {
  margin: 5px;
  width: 30px;
  height: 30px;
  background: #DDD;
  border-radius: 6px;
  border: 1px solid black;
}
button:hover {
  background: #AAA;
}
button:active {
  background: #111;
  color: white;
}
#signature {
  margin: auto;
  width: 320px;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
}

// JS/React

/**
  A simple timer or "25 + 5 clock" to set apart work time and break time written with React and Javascript.
  The current implementation of audio doesn't use an HTML5 audio tag, but is within the javascript code directly. While this passes the tests in spirit, it doesn't pass the audio portion of the freeCodeCamp tests.
  Optional:
    change audio code to pass the test
**/

import React from "https://cdn.skypack.dev/react@17.0.1"
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1"

let interval;
let audio = new Audio("https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav");

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.increaseS = this.increaseS.bind(this);
    this.decreaseS = this.decreaseS.bind(this);
    this.increaseB = this.increaseB.bind(this);
    this.decreaseB = this.decreaseB.bind(this);
    this.state =  {
      titletext: "Let's Go!",
      minutes: 25,
      seconds: 0,
      break: 5,
      session: 25,
      playing: false,
      stopped: true,
      breaking: false
    }
  }
  // function to handle pressing play/pause
  handlePlayPause() {
    if(!this.state.playing){
      this.setState({playing : true, stopped : false});
      interval = setInterval(() => {this.setState({seconds : this.state.seconds - 1})},1000);
    }else{
      this.setState({playing : false});
      clearInterval(interval);
    }
  }
  // function to handle pressing the reset button
  handleReset() {
    this.setState({minutes : 25, seconds : 0, stopped : true, session : 25, break : 5, breaking : false, playing: false});
    clearInterval(interval);
    audio.pause();
    audio.currentTime = 0;
  }
  // the next 4 functions address the increase and decrease of the timers
  increaseS() {
    if (this.state.session < 60) {
      this.setState({session: this.state.session + 1});
      if (!this.state.breaking) {
        this.setState({minutes: this.state.minutes + 1});
      }
    }
  }
  decreaseS() {
    if (this.state.session > 1) {
      this.setState({session: this.state.session - 1});
      if (!this.state.breaking) {
        this.setState({minutes: this.state.minutes - 1});
        }
    }
  }
  increaseB() {
    if (this.state.break < 60) {
      this.setState({break: this.state.break + 1,});
      if (this.state.breaking) {
        this.setState({minutes: this.state.minutes + 1});
      }
    }
  }
  decreaseB() {
    if (this.state.break > 1) {
      this.setState({break: this.state.break - 1});
      if (this.state.breaking) {
        this.setState({minutes: this.state.minutes - 1});
      }
    }
  }
 render() {
   // ensure the the minutes count down when the seconds reach 0, etc
   if(this.state.seconds < 0 && this.state.minutes > 0){
      this.setState({seconds : 59, minutes : this.state.minutes - 1});
    }
   if(this.state.minutes === 0 && this.state.seconds < 0){
      audio.play();
      if(this.state.breaking){
        this.setState({minutes : this.state.session, seconds : 0, breaking : false})
      }else{
        this.setState({minutes : this.state.break, seconds : 0, breaking : true});
      }
    }
   return(
    <div id="clock">
      <div id="title">{this.state.titletext}</div>
      <div id="timer">
        <div id="timer-label">{this.state.breaking ? 'Break' : 'Session'}</div>
        <div id="time-left">{ this.state.minutes <= 9 && this.state.seconds <= 9 ? '0' + this.state.minutes.toString() + ':' + '0' + this.state.seconds.toString() : this.state.minutes <= 9 && this.state.seconds > 9 ? '0' + this.state.minutes.toString() + ':' + this.state.seconds.toString() :  this.state.minutes > 9 && this.state.seconds <= 9 ?  this.state.minutes.toString() + ':' + '0' + this.state.seconds.toString() : this.state.minutes.toString() + ':' + this.state.seconds.toString() }</div>
        <div id="timerbuttons">
          <button class="b-large" id="start_stop" onClick={this.handlePlayPause}>{this.state.playing ? <i class="fas fa-pause"></i> : <i class="fas fa-play"></i>}</button>
          <button class="b-large" id="reset" onClick={this.handleReset}><i class="fas fa-undo"></i></button>
        </div>
      </div>
      <div id="timeaddsubtract">
        <div id="session-label">Session<br />
          <button class="b-small" id="session-increment" onClick={this.increaseS}><i class="fas fa-plus"></i></button>
          <span id="session-length">{this.state.session}</span>
          <button class="b-small" id="session-decrement" onClick={this.decreaseS}><i class="fas fa-minus"></i></button>
        </div>
        <div id="break-label">Break<br />
          <button class="b-small" id="break-increment" onClick={this.increaseB}><i class="fas fa-plus"></i></button>
          <span id="break-length">{this.state.break}</span>
          <button class="b-small" id="break-decrement" onClick={this.decreaseB}><i class="fas fa-minus"></i></button>
        </div>
      </div>
    </div>
    )
 }
}

ReactDOM.render(<Clock />, clockcontainer)
