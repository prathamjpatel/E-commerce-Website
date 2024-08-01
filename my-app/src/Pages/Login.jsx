import React from 'react'
import './css/Login.css'
const Login = () => {
  return (
    <div className='login-signup'>
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="login-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="login">
          Already have an account?
          <span>
            Login here
          </span>
        </p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Login
