import React, { useRef } from 'react';
import './App.css';
import Form2 from './components/Form2/Form2';
import Form3 from './components/Form3/Form3';
import Form4 from './components/Form4/Form4';
import Print from './components/Print/Print';
import {useState} from "react"

function App() {
  const [userName, setUserName] = useState({})
  const r=useRef(null) 
  const q=useRef(null) 
  //q.current.style.background="green"
 // console.log(q?.current.placeholder)

  const clickFunction=(e)=>{
    const{placeholder,value}=e.target
    setUserName({...userName,[placeholder]:value})
    console.log(userName); 
}  
const submitFunction=(e)=>{ 
  //console.log(reff.current); 
  //first={userName.first} last={userName.last} age={userName.age}*//>
   
  r.current.innerHTML=`<h2>entered information</h2>
  
      <div>
          <span>your name:${userName.first} ${userName.last}</span>                
      </div>
      <div>
          <span>your age:${userName.age}</span>                
      </div> `   

  e.preventDefault()    
} 
  return (
    <>
          <div className="form-div">
        <h1 >form home work</h1>
        <form onSubmit={submitFunction} onChange={clickFunction}>
          <div>
            <input type="text" placeholder="first" ref={q}/>
          </div>
          <div>
            <input type="text" placeholder="last" />
          </div>
          <div>
            <input type="number" placeholder="age" />
          </div>
          <div>
            <input type="submit" value="send" /> 
          </div>
        </form>
      </div>
      <div className='print-div' ref={r}> </div>
    
    </>
  );
}

export default App;
