import React, { useState } from 'react';
import './CSS/Signup.css';
import { Link } from 'react-router-dom';
import signup_hero_img from '../Components/Assets/product_2.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.agree) {
      alert("Please agree to the Terms of Service & Privacy Policy.");
      return;
    }
    alert("Account created successfully! Welcome to VELORA.");
  };

  return (
    <div className="signup-page">
      <div className="signup-card-wrapper">
        {/* Left Side: Luxury Editorial Image */}
        <div className="signup-image-side">
          <img src={signup_hero_img} alt="Join VELORA Club" className="signup-side-img" />
          <div className="image-side-overlay">
            <span className="brand-tag">JOIN THE CLUB</span>
            <h2>Unlock Exclusive VIP Privileges.</h2>
            <p>Get early access to secret drops, personalized styling & free express shipping.</p>
          </div>
        </div>

        {/* Right Side: Clean Signup Form */}
        <div className="signup-form-side">
          <div className="signup-header">
            <h1>Create Account</h1>
            <p>Join VELORA today and elevate your fashion lifestyle.</p>
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="username">Full Name</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={changeHandler}
                placeholder="e.g. Imasha Perera"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="form-row-two">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={changeHandler}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="terms-row">
              <label className="terms-checkbox-label">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={changeHandler}
                />
                <span>
                  I agree to VELORA's <a href="#terms">Terms of Service</a> & <a href="#privacy">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button type="submit" className="signup-submit-btn">
              Create Account →
            </button>



            <p className="switch-auth-link">
              Already have an account? <Link to="/login">Sign In Here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
