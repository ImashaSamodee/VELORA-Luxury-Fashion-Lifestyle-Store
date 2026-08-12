import React, { useState } from 'react';
import './CSS/Login.css';
import { Link } from 'react-router-dom';
import login_hero_img from '../Components/Assets/product_4.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome back to VELORA! Login Successful.");
  };

  return (
    <div className="login-page">
      <div className="login-card-wrapper">
        {/* Left Side: Luxury Editorial Image & Brand Quote */}
        <div className="login-image-side">
          <img src={login_hero_img} alt="VELORA Luxury Fashion" className="login-side-img" />
          <div className="image-side-overlay">
            <span className="brand-tag">VELORA LUXURY</span>
            <h2>Timeless Fashion, Tailored For You.</h2>
            <p>Sign in to access your orders, wishlist, and VIP member benefits.</p>
          </div>
        </div>

        {/* Right Side: Clean Login Form */}
        <div className="login-form-side">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Please enter your details to sign in to your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
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

            <div className="remember-row">
              <label className="remember-checkbox-label">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={changeHandler}
                />
                <span>Remember me for 30 days</span>
                
              </label>
              <div className="label-with-link">
                  <a href="#forgot" className="forgot-link">Forgot Password?</a>
                </div>
            </div>

            <button type="submit" className="login-submit-btn">
              Log In →
            </button>

            <p className="switch-auth-link">
              Don't have an account? <Link to="/signup"> Create an Account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
