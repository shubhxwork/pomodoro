import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Boost your productivity with Effix</h1>
        <p>Boost your focus and productivity using the Pomodoro Technique.</p>
        <a href="/timer" className="hero-button">RACE!</a>
      </div>
    </div>
  );
}
