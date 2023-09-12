import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   
 <>
 <div className="wrapper">
  <div className='title-text'>
    <div className='title-login'>login</div>
    <div className='title-signup'>
    Sign up</div>

  </div>
  <div className='form-container'>
    <div className='slide-controls'>
      <input type='radio' name='slide' id='login' checked/>
   <input type='radio' name='slide' id='signup'/>
   <label for="login" className='slide-login'>login</label>
   <label for="signup" className='slide-signup'>signup</label>
   <div className='slider-tab'></div>

    </div>
    <div className='form-inner'>
      <form action='#' className='login'>
        <div className='field'>
          <input type='text' placeholder='email address'/>

        </div>
        <div className='field'>
          <input type='password' placeholder='password'/>

        </div>
        <div className='pass-link'>
          <a href="#">Forgot password?</a></div>
          <div className='field btn'>
            <div className='btn-layer'></div>
            <input type='submit' value="Login"/>
        </div>
        <div className='signup-link'>Not a member? <a href='/register'>SignUp now</a></div>
      </form>
    </div>
  </div>
 </div>
 </>
      
    

    
  )
}

export default Login
