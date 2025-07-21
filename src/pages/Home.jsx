import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to PomodoroApp</h1>
        <p>Boost your focus and productivity using the Pomodoro Technique.</p>
        <a href="/timer" className="hero-button">Start Timer</a>
      </div>
    </div>
  );
}
