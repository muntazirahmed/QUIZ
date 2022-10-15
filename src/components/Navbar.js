import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <span className="logo">cHat ApP</span>
        <div className="user">
            <img src="https://cdn.bollywoodmdb.com/fit-in/celebrities/500x800/photol/26-cele-img/salman-khan-69.jpg"alt=""/>
            <span>john</span>
            <button>logout</button>
        </div>
    </div>
  )
}

export default Navbar