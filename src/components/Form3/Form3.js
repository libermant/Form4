import React, { useRef, useState } from 'react'

const  formStyle=
    {
       display:"flex",
       flexDirection:"column",
       width:"30%",
       margin:"1rem"
    }

const Form3 = () => { 
    
    const[child,setChild]=useState({})
    const formDivEl=useRef(null)
    const submitInputEl=useRef(null)


    const handlechange=(e)=>{
        const{className,value}=e.target
        //console.log("type:",e.target.type);
        //console.log("value:",e.target.value);
        //console.log("class:",e.target.className);
        //console.log(e.target.parentElement.className);
        //console.log(e.target.parentElement.children[0].innerHTML);
       // console.log("class name",className);

       setChild({...child,[className]:value})
       console.log(child);
    }
    submitInputEl.current.style.background="green"

    console.log(formDivEl?.current);
    console.log(submitInputEl?.current);

  return (
    <div className='form-div' ref={formDivEl}>
        <form style={formStyle} onChange={handlechange}>
            <div>
                <span>First Name</span>
                <input type="text" className='first'></input>
            </div>
            <div>
                <span>Last Name</span>
                <input type="text" className='last'></input>
            </div>
            <div>
                <span>Nick Name</span>
                <input type="text" className='nick'></input>
            </div>
            <input ref={submitInputEl} type="submit" onClick={(e)=>{
                e.preventDefault();console.log(child);
            }}/>
        </form>
    </div>
  )
}

export default Form3