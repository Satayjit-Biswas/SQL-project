import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddEdit.css";

function AddEdit(props) {
  const singleUserid = props.id;
  const [state, setState] = useState({});
  const { name, email, address } = state;
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${singleUserid}`)
      .then((res) => setState({ ...res.data[0] }));
  }, [singleUserid]);
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address) {
      toast.error("Please Provide valu into each input field");
    } else {
      if (!singleUserid) {
        axios
          .post("http://localhost:5000/api/post", {
            name,
            email,
            address,
          })
          .then(() => {})
          .catch((err) => {
            toast.error(err.response.data);
          });
        setState({ name: "", email: "", address: "" });
        toast.success("ADD Data");
      }
      else{
        axios
          .put(`http://localhost:5000/api/update/${singleUserid}`, {
            name,
            email,
            address,
          })
          .then(() => {})
          .catch((err) => {
            toast.error(err.response.data);
          });
        setState({ name: "", email: "", address: "" });
        toast.success("Update your User Data...");
      }
    }
  };

 
  // useEffect(()=>{
  //   axios.get(axios.get("http://localhost:5000/api/get");)
  // },[])
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
            value={name || ""}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email || ""}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
          <label>Address:</label>
          <textarea
            type="text"
            name="address"
            id="address"
            value={address || ""}
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
