import { useState } from "react";
import "./Modal.css";

function Modal({ onClose, onSubmit }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!username.trim()) return;
    onSubmit(username);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2>Sign up</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <label>E-Mail</label>
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="submit" onClick={handleSubmit}>
          Sign up
        </button>

        <p className="login">
          Already have an account? <span>Log In</span>
        </p>
      </div>
    </div>
  );
}

export default Modal;
