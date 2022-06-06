import React, { useState } from 'react'

const Form2 = () => {

    const[user,setUser]=useState({})
    const handleFormChange=(e)=>{
        const {type,value}=e.target
        console.log(e.target.value);
        setUser({...user,[type]:value})
        console.log(user);
      
    }
    const handleSubmit=(e)=>{
        console.log("form submit");
        e.preventDefault()
    }
  return (
    <div>
        <h2>sample user form</h2>
        <form onSubmit={handleSubmit} action='' onChange={handleFormChange}>
            <input type="email" placeholder='enter email'/>
            <input type="password" placeholder='enter password'/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form2