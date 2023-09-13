import React, { useState } from 'react'

const TextArea = () => {
  const[count,setCount]=useState("");
  const maxchar=50;
  const handelchange=(e)=>{
        const inputText=e.target.value;
      if(inputText.length<=50){
        setCount(inputText);
      }
  }
  return (
    <>
      <h1>text area</h1>
      <textarea name="" id="" cols="30" rows="10" value={count} onChange={handelchange}></textarea>
      <p><strong>{maxchar - count.length}</strong></p>
    </>
  )
}

export default TextArea
