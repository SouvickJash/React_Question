import React, { useState } from 'react'

const Counter = () => {
   const [count,setCount]=useState(0);

   const inc=()=>{
      setCount(count+1);
   }
   const dec=()=>{
      setCount(count-1)
   }
  return (
    <>
    <h1>Count: {count}</h1>
      <button type="button" class="btn btn-primary" onClick={inc}>Increment</button>
      <button type="button" class="btn btn-secondary" onClick={dec}>Decrement</button>
    </>
  )
}

export default Counter
