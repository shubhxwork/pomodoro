import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">PomodoroApp</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/timer">Timer</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
