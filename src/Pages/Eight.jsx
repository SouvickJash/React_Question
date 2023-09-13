import React, { useState } from "react";

const Eight = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Access form data here
    // You can send the data to an API or perform other actions here
  };
  //reset
  const resetForm=()=>{
    setFormData(initialFormData);
  }
//clear
const clearForm=()=>{
  setFormData({
    firstName: '',
    lastName: '',
    email: '',
  });
}

  return (
    <>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <form onSubmit={handleSubmit}>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <button type="button" className="btn btn-danger" onClick={resetForm}>
          Reset
        </button>

        <button type="button"className="btn btn-dark" onClick={clearForm} style={{marginLeft:"15px"}}>
          Clear
        </button>
      </form>
    </>
  );
};

export default Eight;
