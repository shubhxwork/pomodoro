// src/pages/Timer.jsx
import { useState, useEffect, useRef } from 'react';
import './Timer.css';

const modes = {
  pomodoro: { label: 'Effix', time: 25 * 60 },
  shortBreak: { label: 'Sprint', time: 5 * 60 },
  longBreak: { label: 'Marathon', time: 15 * 60 }
};

export default function Timer() {
  const [mode, setMode] = useState('pomodoro');
  const [secondsLeft, setSecondsLeft] = useState(modes[mode].time);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    setSecondsLeft(modes[mode].time);
  }, [mode]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = () => {
    const m = Math.floor(secondsLeft / 60);
    const s = secondsLeft % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleModeChange = (newMode) => {
    clearInterval(intervalRef.current);
    setMode(newMode);
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <div className="mode-buttons">
        {Object.keys(modes).map(m => (
          <button
            key={m}
            className={m === mode ? 'active' : ''}
            onClick={() => handleModeChange(m)}
          >
            {modes[m].label}
          </button>
        ))}
      </div>
      <div className="timer-display">{formatTime()}</div>
      <div className="controls">
        <button onClick={() => setIsRunning(prev => !prev)}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button onClick={() => {
          setSecondsLeft(modes[mode].time);
          setIsRunning(false);
          clearInterval(intervalRef.current);
        }}>
          Reset
        </button>
      </div>
    </div>
  );
}
