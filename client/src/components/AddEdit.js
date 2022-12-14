import React, { useState } from "react";
import "./AddEdit.css";
const initialState = {
  name: "",
  email: "",
  address: "",
};
function AddEdit(props) {
  const [state, setState] = useState(initialState);


  const handlesubmit = () => {};
  return (
    <div className="addedit_area">
      <div className="container">
        <h4>{props.text} :</h4>
        <form onSubmit={handlesubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={`name`}
            onChange={""}
            placeholder="Your Name"
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={`email`}
            onChange={""}
            placeholder="Your Email"
          />
          <label>Address:</label>
          <textarea
            type="text"
            name="address"
            id="address"
            value={`address`}
            onChange={""}
            placeholder="Your Address"
          ></textarea>
          <button>{props.text}</button>
        </form>
      </div>
    </div>
  );
}

export default AddEdit;
