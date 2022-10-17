import React from 'react';
import Input from './Input';
import Messages from './Messages';
import addfriend from '../images/addfriend.png';
import addvideo from '../images/addvideo.png'
import addicon from '../images/addicon.png'

function Chat() {
  return (
    <div className="chat">
        <div className="chatinfo">
            <span>john</span>
            <div classname="chaticons">
                <img className="chatimg" src={addicon}alt=""/>
                <img className="chatimg" src={addvideo}alt=""/>
                <img className="chatimg" src={addfriend}alt=""/>
            </div>
        </div>
        <Messages/>
        <Input/>

    </div>
  )
}

export default Chat