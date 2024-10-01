import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const navigate = useNavigate();

  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' required title="Please enter your name." />
          <input type="email" placeholder='Your Email Address' required title="Please enter a valid email address." />
          <input type="password" placeholder='Your Password' required title="Please enter your password." />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span onClick={() => navigate('/login')}>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" required title="You must agree to the terms of use & privacy policy." />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
