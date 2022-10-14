import React from 'react'

function Login() {
  return (
    <div className="formcontainer">
    <div className="formwrapper">
      <span className="logo">cHaT APp</span>
      <span className="title">Login</span>
      <form>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
       
        <button>Sign up</button>
        <p>not registered ? Register</p>
      </form>
    </div>
  </div>
  )
}

export default Login