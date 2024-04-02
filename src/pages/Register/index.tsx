import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleClick() {
    navigate("/login");
  }

  function validate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username || !password || !email) {
      alert("Username, email, and password are required.");
      return false;
    }
    if (username.length < 3 || password.length < 3) {
      alert("Username and password must be at least 3 characters long.");
      return false;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  }

  function handleRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const isValid = validate(e);
    if (!isValid) return;

    const user = {
      username,
      email, 
      password,
    };

    console.log(user);
    
    fetch(`https://auth-rg69.onrender.com/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === "User registered successfully!") {
          navigate("/");
        } else {
          alert(data.message);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  function isValidEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
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
        <button type="submit">Register</button>
        <p>Already have an account? <span style={{cursor: 'pointer'}} onClick={handleClick}>Login</span></p>
      </form>
    </div>
  );
}

export default Register;
