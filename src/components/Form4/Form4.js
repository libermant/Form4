import React, { useState } from "react";
import "./Form4.css";
import Print from "../Print/Print";

const Form = () => {

    
    const [userName, setUserName] = useState({}) 
    console.log(userName.first);
    console.log(userName.last);
    console.log(userName.age);


    /*const clickFunction=(e)=>{
        const{placeholder,value}=e.target
        setUserName({...userName,[placeholder]:value})
        console.log(userName);      
    }  */       
    
    const submitFunction=(e)=>{  
        const{placeholder,value}=e.target
        setUserName({...userName,[placeholder]:value})
        console.log(userName);    
        e.preventDefault()
       // <Print/>    
    } 

  return (
    <>
      <div className="form-div">
        <h1>form home work</h1>
        <form onSubmit={submitFunction} /*div>onChange={clickFunction}*/>
          <div>
            <input type="text" placeholder="first" />
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
      <Print first={userName.first} last={userName.last} age={userName.age}/>       
      </div>
    </>
  );
};

export default Form;