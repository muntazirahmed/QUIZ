import React from 'react';
import '../App.css'
import Chat from '../components/Chat';
import Sidebar from '../components/Sidebar'

function Home() {
  return (
    <div className="Home">
        <div className="container">
    <Chat/>
    <Sidebar/>
    </div>
    </div>
  )
}

export default Home