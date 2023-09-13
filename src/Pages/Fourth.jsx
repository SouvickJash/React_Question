import React, { useState } from 'react'

const Fourth = () => {
  const [items,setItems]=useState([]);

  const removefun=(itemRemove)=>{
    setItems(preItem => preItem.filter(item=>item !==itemRemove));
  }
  const addfun=(newItem)=>{
    setItems(preItem=>[...preItem,newItem])
  }
  return (
    <>
       <hi>List of arrays</hi>
      <ul>
      {
        items.map(item=>(
          <li key={item}>
            {item}
            <button type="button" class="btn btn-danger" onClick={()=>removefun(item)}>Remove Item</button>
          </li>
        ))
       }
      </ul>
      <button type="button" class="btn btn-primary" onClick={()=>addfun('NEW ITEM: ')}>Add Item</button>
    </>
  )
}

export default Fourth