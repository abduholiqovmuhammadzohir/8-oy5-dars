import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function handleClick() {
    navigate("/login");
  }

  function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username || !password || !email) {
      alert("Username, email, and password are required.");
      return;
    }
    if (username.length < 3 || password.length < 3) {
      alert("Username and password must be at least 3 characters long.");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  }

  function isValidEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  return (
    <div className={styles.register_wrapper}>
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter ReportPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Register</button>
        <p>Already have an account? <span onClick={handleClick}>Login</span></p>
      </form>
    </div>
  );
}

export default Register;
