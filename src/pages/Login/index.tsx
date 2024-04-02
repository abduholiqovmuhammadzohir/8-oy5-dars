import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

interface User {
  username: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleClick() {
    navigate("/register");
  }

  function validate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username || !password) {
      alert("Username and password are required.");
      return false;
    }
    if (username.length < 3 || password.length < 3) {
      alert("Username and password must be at least 3 characters long.");
      return false;
    }
    return true;
  }

  function handleLogin(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate(e)) return;

    const user: User = {
      username,
      password,
    };

    fetch(`https://auth-rg69.onrender.com/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          localStorage.setItem('token', data.accessToken);
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className={styles.login_wrapper}>
      <form onSubmit={handleLogin}> {}
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
        <button type="submit">Login</button> {}
        <p>Don’t have an account? <span style={{cursor: 'pointer'}} onClick={handleClick}>Register</span></p>
      </form>
    </div>
  );
}

export default Login;
