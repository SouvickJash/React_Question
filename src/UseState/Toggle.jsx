import React, { useState } from "react";

const Toggle = () => {
  const [data, setData] = useState(false);
  console.log(data);
  return (
    <>
      {data ? <h1>welcome to react page</h1> : ""}
      <button
        type="button"
        class="btn btn-primary btn-sm"
        onClick={() => setData(true)}
      >Show 
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm"
        onClick={() => setData(false)}
      >
        Hide
      </button>    
    </>
  );
};

export default Toggle;
