import React, { useState } from 'react'

const First = () => {
   const[count,setCount]=useState(0);
   const fun1=()=>{
      setCount(count+1);
   }
   const fun12=()=>{
      setCount(count-1);
   }
  return (
    <>
      <h1>{count}</h1>
      <button type="button" class="btn btn-primary" onClick={fun1}>INCREMENT</button>
      <button type="button" class="btn btn-secondary" onClick={fun1}>DECREMENT</button>
    </>
  )
}

export default First