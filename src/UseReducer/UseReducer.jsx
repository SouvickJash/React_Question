import React, { useReducer } from 'react'
import './UseReducer.css'                                           
const initialstate=0;
const reducer=(state,action)=>{
   if(action.type==='increment'){
      return state+1;
   }
   if(action.type==='decrement'){
      return state-1;
   }
}

const UseReducer = () => {
   const [state,dispatch]=useReducer(reducer,initialstate)

  return (
    <>
{/*       
      <button type="button" class="btn btn-primary" onClick={()=>dispatch({type:"increment"})}>INCREMENT</button>
      <button type="button" class="btn btn-danger" onClick={()=>dispatch({type:"decrement"})}>DECREMENT</button> */}

<div className="card text-white bg-dark mb-3" style={{maxWidth: '18rem'}}>
  <h2 className="card-header">Count : {state}</h2>
  <div className="card-body">
    <h5 className="card-title"></h5>
      <button type='button' class='btn btn-primary' onClick={()=>dispatch({type:"increment"})}>INCREMENT</button> 
      <button type='button' class='btn btn-danger' onClick={()=>dispatch({type:"decrement"})}>DECREMENT</button>
  </div>
</div>

    </>
  )
}

export default UseReducer
