import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import AddEdit from "../components/AddEdit";
import SqlCode from "../components/SqlCode";
import "./Insert.css";

const Insert = () => {
  const [data, setData] = useState([]);
  const [singleUser, setsingleUser] = useState({});
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    loadData();
  }, [data]);
 
  const handleUpdate = (id) =>{
    setsingleUser(id);
  }
  return (
    <div className="container">
        <ToastContainer></ToastContainer>

      <div className="table_area">
        <table>
          <tr className="table_header">
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th></th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>
                    <button
                      onClick={() => {
                        handleUpdate(item.id);
                      }}
                    >
                      Update
                    </button>
                  </td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="footer_area">
        <div className="input_area">
        <h4> Update DATA :</h4>
          <AddEdit id={singleUser}  text="Update" ></AddEdit>
        </div>
        <SqlCode code={`"UPDATE contact SET name = ? , email = ? , address = ? WHERE id = ? "`}></SqlCode>
      </div>
    </div>
  );
};

export default Insert;
