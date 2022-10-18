import React,{useState,useEffect,useMemo} from 'react';
import './App.css';
import Trivia from './components/Trivia'

function App() {
  const[questionnumber,setquestionnumber]=useState(1);
  const[stop,setstop]=useState(false);
  const[earned,setearned]=useState("$ 0");
  
const data=[
  { 
    id:1,
    question:"Iphone is a brand of ?",
    answers :[
       {
        text:"car",
        correct:false,
       },
       {
        text:"bat",
          correct:false,
         },
         {
          text:"laptop",
            correct:false,
           },
           {
            text:"phone",
              correct:true,
             },
      
      ]},
      { id:2,
        question:"Tesla  belongs to ?",
         answers :[
             {
            text:"cars",
              correct:true,
             },
             {
              text:"plane",
                correct:false,
               },
               {
                text:"ship",
                  correct:false,
                 },
                 {
                  text:"bike",
                    correct:false,
                   },
            
            ]},
           
            {
               id:3,
               question:" samllest continent by area?",
               answers :[
                   {
                  text:"japan",
                    correct:false,
                   },
                   {
                    text:"korea",
                      correct:false,
                     },
                     {
                      text:"china",
                        correct:false,
                       },
                       {
                        text:"australlia",
                          correct:true,
                         },
                  
                  ]},
                  {
                    id:3,
                    question:"first prime minister of india ?",
                    answers :[
                        {
                       text:"lal bahadur shastriya",
                         correct:false,
                        },
                        {
                         text:"nitesh kumar",
                           correct:false,
                          },
                          {
                           text:"Nehru",
                             correct:true,
                            },
                            {
                             text:"mk gandhi",
                               correct:false,
                              },
                       
                       ]},
                       {
                        id:3,
                        question:"which among the following is not neighbour of india ?",
                        answers :[
                            {
                           text:"bhutan",
                             correct:false,
                            },
                            {
                             text:"korea",
                               correct:true,
                              },
                              {
                               text:"srilanka",
                                 correct:false,
                                },
                                {
                                 text:"nepal",
                                   correct:false,
                                  },
                           
                           ]},
                           {
                            id:3,
                            question:"largest country by population ?",
                            answers :[
                                {
                               text:"japan",
                                 correct:false,
                                },
                                {
                                 text:"korea",
                                   correct:false,
                                  },
                                  {
                                   text:"china",
                                     correct:true,
                                    },
                                    {
                                     text:"australlia",
                                       correct:false,
                                      },
                               
                               ]}
]



  const moneypyramid=useMemo(() => 
    [
    { id:1,amount:"$ 100"},
    { id:2,amount:"$ 500"},
    { id:3,amount:"$ 1000"},
    { id:4,amount:"$ 5000"},
    { id:5,amount:"$ 10000"},
    { id:6,amount:"$ 20000"},
    { id:7,amount:"$ 50000"},
    { id:8,amount:"$ 100000"},
    { id:9,amount:"$ 500000"},
    { id:10,amount:"$ 1000000"},
    { id:11,amount:"$ 5000000"},
    { id:12,amount:"$ 10000000"},
].reverse(),
  [])

 
useEffect(()=>{
  questionnumber >1 && setearned(moneypyramid.find((m) => m.id === questionnumber-1).amount);  
},[moneypyramid,questionnumber])
  return (
    <div className="app">
      <div className="main">
           {stop? (<h1 className="endtext"> you earned :{earned}</h1>):( <><div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia 
        data={data}
        setstop={setstop}
        questionnumber={questionnumber}
        setquestionnumber={setquestionnumber}
        /></div>
        </>)}

     
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