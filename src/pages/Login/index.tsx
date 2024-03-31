import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    navigate("/register");
  }

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username || !password) {
      alert("Username and password are required.");
      return;
    }
    if (username.length < 3 || password.length < 3) {
      alert("Username and password must be at least 3 characters long.");
      return;
    }
  }

  return (
    <div className={styles.login_wrapper}>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        <p>Don’t have an account? <span onClick={handleClick}>Register</span></p>
      </form>
    </div>
  );
}

export default Login;
