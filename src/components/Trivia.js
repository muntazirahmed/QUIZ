import React,{useState,useEffect} from 'react'

function Trivia ({data,questionnumber,setstop,setquestionnumber}) {
   
    const[question,setquestion]=useState(null);
    const[selectedanswer,setselectedanswer]=useState(null);
    const[classname,setclassname]=useState("answer");



    useEffect(()=>{
      setquestion(data[questionnumber-1])
    },[data,questionnumber]);


    const delay =(duration,callback)=>{
      setTimeout(()=>{
        callback();
      },duration)
    }
    
    const handleclick =(a)=>{
      setselectedanswer(a);
      setclassname("answer active");
      delay(3000,()=>
         setclassname(a.correct ? "answer correct": "answer wrong")
      );
      delay(5000,()=>{
        if(a.correct){
          setquestionnumber((prev)=>prev+1)
          setselectedanswer(null);
        } else {
          setstop(true)
        }
      }
    
   )
     
    };


  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
       <div className="answers">
        {question?.answers.map((a)=>(
          <div className={selectedanswer === a ? classname : "answer"}onClick={()=>handleclick(a)}>{a.text}</div>
        ))}
       </div>
  </div>
  );
}

export default Trivia