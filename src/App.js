import React,{useState} from 'react';
import './App.css'

function App() {
  const[questionnumber,setquestionnumber]=useState(1);
  const moneypyramid=
  [
    { id:1,amount:100},
    { id:2,amount:500},
    { id:3,amount:10000},
    { id:4,amount:10},
    { id:5,amount:10},
    { id:6,amount:10},
    { id:7,amount:10},
    { id:8,amount:10},
    { id:9,amount:10},
    { id:10,amount:10},
    { id:11,amount:10},
    { id:12,amount:10},
   { id:13,amount:10},
    { id:14,amount:10},
    { id:15,amount:10},
].reverse()

  return (
    <div className="app">
      <div className="main">

        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">question</div>
      </div>

      <div className="pyramid">
        <ul className="moneylist">
           {moneypyramid.map((m)=>(  
           <li className ={questionnumber === m.id ? "moneylistitem active" :"moneylistitem" }>
          <div className="moneylistitemnumber">{m.id}</div>
          <div className="moneylistitemamount">{m.amount}</div>
          </li>

))}
        
          
         
      
          
        </ul>
      </div>
    </div>
  )
}

export default App