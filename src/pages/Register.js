import React from 'react';
import uploada from './images/uploada.png';
import './App.css';

function Register() {
  return (
    <div className="formcontainer">
    <div className="formwrapper">
      <span className="logo">cHaT APp</span>
      <span className="title">Register</span>
      <form>
        <input type="text" placeholder=" Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input style={{display:"none"}}type="file"id="file"/>
        <label htmlFor="file">
          <img  style={{height:35}}src={uploada} alt=""/>
        Add an Avtar</label>
        
        <button>Sign up</button>
        <p>already registerd ? login</p>
      </form>
    </div>
  </div>
  )
}

export default Register