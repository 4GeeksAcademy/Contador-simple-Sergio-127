import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

let counter = 0;
let intervalId = null;



const root = createRoot(document.getElementById("root"))

const tick = () => {
  counter++;
  renderApp();
}

const stopCounter = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

const startCounter = () => {
  if (!intervalId) {
    intervalId = setInterval(tick, 1000);
  }
}

const resetCounter = () => {
  stopCounter();
  counter = 0;
  renderApp();
}

const renderApp = () => {
  root.render(
    <SecondsCounter
      seconds={counter}
      onStop={stopCounter}
      onStart={startCounter}
      onReset={resetCounter} />
  );
}




renderApp();
startCounter();


function SecondsCounter(props) {

  const digitSix = props.seconds % 10;
  const digitFive = Math.floor(props.seconds / 10) % 10;
  const digitFour = Math.floor(props.seconds / 100) % 10;
  const digitThree = Math.floor(props.seconds / 1000) % 10;
  const digitTwo = Math.floor(props.seconds / 10000) % 10;
  const digitOne = Math.floor(props.seconds / 100000) % 10;

  return (
    <div className="big-counter">
      <div className='clock-icon'>
        <i className='far fa-clock'></i>
      </div>
      <div className='digit'>{digitOne}</div>
      <div className='digit'>{digitTwo}</div>
      <div className='digit'>{digitThree}</div>
      <div className='digit'>{digitFour}</div>
      <div className='digit'>{digitFive}</div>
      <div className='digit'>{digitSix}</div>


      <button onClick={props.onStop}>STOP</button>
      <button onClick={props.onStart}>RESUME</button>
      <button onClick={props.onReset}>RESTART</button>
    </div>
  )
}
