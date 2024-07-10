import React, { useState } from "react";
import Layout from "../components/Layout";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/home";
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <Layout>
      <div className="login-page">
        <div className="login-container">
          <div className="header">
            <div className="text">Login</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={email_icon} alt="Email" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <img src={password_icon} alt="Password" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="submit-container">
            <button className="submit" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
