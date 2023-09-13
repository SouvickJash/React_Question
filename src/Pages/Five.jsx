import React, { useState } from 'react'

const Five = () => {
   const[count,setCount]=useState('souvick');
   const fun1=()=>{
      if(count==='souvick'){
         setCount("sayan")
      }
      else{
         setCount('souvick');
      }
   }
  return (
    <>
      <h3>Your name is: {count}</h3>
      <button type="button" class="btn btn-primary" onClick={fun1}>Click Me</button>
     
    </>
  )
}

export default Five