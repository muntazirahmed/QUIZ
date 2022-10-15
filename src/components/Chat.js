import React from 'react';
import Messages from './Messages';

function Chat() {
  return (
    <div className="chat">
        <div className="chatinfo">
            <span>john</span>
            <div classname="chaticons">
                <img  src=""alt=""/>
                <img  src=""alt=""/>
                <img  src=""alt=""/>
            </div>
        </div>
        <Messages/>
    </div>
  )
}

export default Chat