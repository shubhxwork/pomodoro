// src/pages/Login.jsx
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/timer'); // redirect after login
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Effix</h2>
      <button className="google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}
