import React from 'react';
import './CSS/Login.css'; 
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Login</h1>
        <div className="login-fields">
          <input type="email" placeholder='Your Email Address' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button>Login</button>
        <p className="login-s">Don't have an account? <span onClick={() => navigate('/login-signup')}>Sign up here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" required title="You must agree to the terms of use & privacy policy." />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
