import React, { useState } from 'react'

const Third = () => {
   const[color,setColor]=useState('red');
   const handelColor=(e)=>{
     setColor(e.target.value)
   }
  return (
    <>
    <h1>You are selected: {color}</h1>
      <label htmlFor="colorDropdown">Choose your color: </label>
      <select value="color" id="colorDropdown" onChange={handelColor}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>
      
    </>
  )
}

export default Third