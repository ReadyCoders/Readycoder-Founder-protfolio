import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Join.css";
import loginpic from "../../assets/images/loginpic.jpeg";

function Join() {
  return (
    <div className="joinpage">
      <Navbar />
      <div>
        <h3 className="Join-title">
          Join the <span className="text-brown">Community</span>
        </h3>
        <div className="form">
          <div className="form-body">
            <div>
              <h1>Sign Up</h1>
            </div>
            <div className="username">
              <label className="form__label" htmlFor="firstName">
                <i className="zmdi zmdi-account"></i>
              </label>
              <input
                className="form__input"
                type="text"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="lastname">
              <label className="form__label" htmlFor="lastName">
                <i className="zmdi zmdi-account"></i>
              </label>
              <input
                type="text"
                id="lastName"
                className="form__input"
                placeholder="LastName"
              />
            </div>
            <div className="email">
              <label className="form__label" htmlFor="email">
                <i className="zmdi zmdi-email"></i>
              </label>
              <input
                type="email"
                id="email"
                className="form__input"
                placeholder="Email"
              />
            </div>
            <div className="Phone">
              <label className="form__label" htmlFor="Phone">
                <i className="zmdi zmdi-phone-in-talk"></i>
              </label>
              <input
                type="Phone"
                id="Phone"
                className="form__input"
                placeholder="Phone Number"
              />
            </div>
            <div className="password">
              <label className="form__label" htmlFor="password">
                <i className="zmdi zmdi-key"></i>
              </label>
              <input
                className="form__input"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="confirm-password">
              <label className="form__label" htmlFor="confirmPassword">
                <i className="zmdi zmdi-key"></i>
              </label>
              <input
                className="form__input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" className="btn btn-primary footerbox">
              Register
            </button>
          </div>
          
          <div className="imagepic">
            <img src={loginpic} alt="empty" />
            <label htmlFor="Already Registered">Already Registered / 
            <link rel="stylesheet" href="/" />Log In</label>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Join;
