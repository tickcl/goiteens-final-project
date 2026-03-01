import { useState } from "react";
import "./Header.css";
import logo from "../img/logo1.png";
import user from "../img/user.png";
import Modal from "./Modal";

function Header() {
  const [open, setOpen] = useState(false);

  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username");
  });

  const handleSignUp = name => {
    localStorage.setItem("username", name);
    setUsername(name);
    setOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="nav">
          <a href="#">Who we are</a>
          <a href="#">Contacts</a>
          <a href="#">Menu</a>
        </nav>

        <div className="actions">
          {username ? (
            <div className="user-name">{username}</div>
          ) : (
            <button className="signup" onClick={() => setOpen(true)}>
              Sign Up
            </button>
          )}

          <div className="avatar">
            <img src={user} alt="" />
          </div>
        </div>
      </header>

      {open && (
        <Modal
          onClose={() => setOpen(false)}
          onSubmit={handleSignUp}
        />
      )}
    </>
  );
}

export default Header;