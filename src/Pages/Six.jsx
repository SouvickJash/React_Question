//. How can you initialize state based on a prop value using the useState hook?
import React, { useEffect, useState } from 'react'

const Six = (props) => {
   const[value,setValue]=useState(props.initialvalue);

   useEffect(()=>{
        setValue(props.initialvalue)
   })
  return (
    <>
       <h1>State value: {value}</h1>
    </>
  )
}

export default Six