import React, { useState } from "react";
import Layout from "../components/Layout";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import phone_icon from "../Assets/phone.png";
import password_icon from "../Assets/password.png";
import "../styles/Login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        phoneNumber,
      }),
    });
    const data = await response.json();
    if (data.message === "User registered successfully") {
      window.location.href = "/login";
    }
  };

  return (
    <Layout>
      <div className="login-page">
        <div className="login-container">
          <div className="header">
            <div className="text">Register</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={user_icon} alt="Username" />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
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
              <img src={phone_icon} alt="Phone Number" />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
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
              Register
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
