import React, { useState } from 'react'

const ChangeColor = () => {
   const[change,setChange]=useState('green');
   const handleClick=()=>{
       setChange(change)
   }
  return (
    <>
    
     <button style={{background:"red"}} onClick={handleClick}>Click Me</button> 
    </>
  )
}

export default ChangeColor
