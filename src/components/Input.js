import React from 'react';
import attach from '../images/attach.png';
import file from '../images/file.png'

const Input = () => {
  return (
    <div className="input"> 
    <input type="text"placeholder="type something.."/>
    <div classnae="send">
      <img src={attach}alt=""/>
      <input type="file" style={{display :"none"}}id ="file"/>
      <label htmlFor="file">
        <img src={file} alt=""/>
      </label>
      <button className="button">Send</button>
    </div>
    </div>



  )
}

export default Input