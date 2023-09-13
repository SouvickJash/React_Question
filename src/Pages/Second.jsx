import React, { useState } from 'react'

const Second = () => {
  const [count,setCount]=useState(0);
  const fun=()=>{
    setCount(preCount => preCount+1);
  }
  return (
    <>
       <h1>Incrment number: {count}</h1>
       <button type="button" class="btn btn-primary" onClick={fun}>INCREMENT</button>
    </>
  )
}

export default Second
