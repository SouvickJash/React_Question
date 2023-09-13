//. Create a component that fetches data from an API when it mounts and displays it on the screen using the useEffect hook.
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Eleven = () => {
   const[data,setData]=useState();
   const getData=async()=>{
      const url='https://jsonplaceholder.typicode.com/posts'
      const res=await axios.get(`${url}`)
      setData(res?.data);
   }
useEffect(()=>{
   getData();
},[])
console.log(data);
  return (
    <>
      <div class="container">
  <div class="row">
   {
      data?.map((item)=>{
         return(
            <>
              <h1>{item.id}</h1>
            </>
         )
      })
   }
    <div class="col-sm">
    </div>
  </div>
</div>
    </>
  )
}

export default Eleven