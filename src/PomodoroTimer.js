import React, { useState, useRef } from "react";

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) return;

    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        resetTimer();
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  }

  return (
    <div className="timer">
      <div className="time">
        <span id="minutes">{minutes < 10 ? "0" + minutes : minutes}</span>:
        <span id="seconds">{seconds < 10 ? "0" + seconds : seconds}</span>
      </div>
      <button onClick={isRunning ? stopTimer : startTimer}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default PomodoroTimer;
