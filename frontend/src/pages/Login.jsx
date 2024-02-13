import React, { useState, useContext } from "react";
import "../styles/login.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../context/userContext.jsx";

const Login = () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(`${baseUrl}/users/login`, userData);
      const user = await response.data;
      setCurrentUser(user);
      navigate("/organisationen");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={loginUser}>
        <div className="form-content">
          <h2 className="form-title">Einloggen</h2>
          {error && <p className="errorMessage">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
              name="email"
              type="text"
              placeholder="E-Mail eingeben"
              value={userData.email}
              onChange={changeInputHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwort">Passwort</label>
            <input
              name="password"
              type="password"
              placeholder="Passwort eingeben"
              value={userData.password}
              onChange={changeInputHandler}
            />
          </div>
          <div>
            <button type="submit" className="btn">
              anmelden
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
