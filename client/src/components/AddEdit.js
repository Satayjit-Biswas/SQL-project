import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddEdit.css";
const initialState = {
  name: "",
  email: "",
  address: "",
};
function AddEdit(props) {
  const [state, setState] = useState(initialState);
  const { name, email, address } = state;
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address) {
      toast.error("Please Provide valu into each input field");
    } else {
      axios
        .post("http://localhost:5000/api/post", {
          name,
          email,
          address,
        })
        .then(() => {
          setState({ name: "", email: "", address: "" });
          toast.success("ADD Data");
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
      setState({ name: "", email: "", address: "" });
      toast.success("ADD Data");
      // setTimeout(() =>{
      //   history.push("/");
      // },5000)
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className="addedit_area">
      <ToastContainer></ToastContainer>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
          <label>Address:</label>
          <textarea
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleInputChange}
            placeholder="Your Address"
          ></textarea>
          <button type="submit">{props.text}</button>
        </form>
      </div>
    </div>
  );
}

export default AddEdit;
