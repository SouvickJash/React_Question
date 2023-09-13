import React, { useEffect, useState } from 'react'

const Ten = () => {
   const[loading,setLoading]=useState(true);
   useEffect(()=>{
      setTimeout(()=>{
         setLoading(false)
      },1000);
   },[])
   console.log("....",loading);
  return (
    <>
      {
         loading?(
            <div className="loading-spinner">
            {/* You can add your loading spinner component here */}
            <h6>Loading...</h6>
          </div>
         ):(
            <div>
            {/* Render your content here when data loading is complete */}
            <h1>Data Loaded Successfully!</h1>
          </div>
         )
      }
    </>
  )
}

export default Ten