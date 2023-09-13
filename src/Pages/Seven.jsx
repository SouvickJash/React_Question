//Create a component that tracks the mouse position and displays it using the useState hook.
import React, { useEffect, useState } from 'react'

const Seven = () => {
   const[position,setPosition]=useState({x:0,y:0});
   const updatePosition=(e)=>{
      setPosition({x:e.clientX, y:e.clientY})
   }
   useEffect(()=>{
      window.addEventListener('mousemove',updatePosition);
       return()=>{
         window.removeEventListener('mousemove',updatePosition)
       }
   })
  return (
    <>
      <h1>Mouse Position Tracker</h1>
      <p>Mouse X: {position.x}</p>
      <p>Mouse Y: {position.y}</p>
    </>
  )
}

export default Seven