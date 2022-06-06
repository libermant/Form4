import React, { useRef } from 'react'

const Print = ({first,last,age}) => {
  const p=useRef()  
  return (
      <>
    <div className='print-div'ref={p}>    
        {/* <h2>entered information</h2>
            <div>
                <span>your name:{first} {last}</span>                
            </div>
            <div>
                <span>your age:{age}</span>                
            </div>     */}
    </div>
    </>
  )
}

export default Print