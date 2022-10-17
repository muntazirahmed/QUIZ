import React,{useState} from 'react';
import uploada from '../images/uploada.png';







function Register() {
  const [err,seterr]=useState(false)
  const handlesubmit= async(e)=>{
    e.preventDefault();


  }
  return (
    <div className="formcontainer">
    <div className="formwrapper">
      <span className="logo">cHaT APp</span>
      <span className="title">Register</span>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder=" Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input style={{display:"none"}}type="file"id="file"/>
        <label htmlFor="file">
          <img  style={{height:35}}src={uploada} alt=""/>
        Add an Avtar</label>
        
        <button>Sign up</button>
        {err && <span>Something went wrong</span>}
        <p>already registerd ? login</p>
      </form>
    </div>
  </div>
  )
}

export default Register