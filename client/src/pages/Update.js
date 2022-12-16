import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEdit from "../components/AddEdit";
import SqlCode from "../components/SqlCode";
import "./Insert.css";

const Insert = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    loadData();
  }, [setData]);
  const handleUpdate = () =>{
    
  }
  return (
    <div className="container">
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
                      Remove
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
          <AddEdit text="ADD"></AddEdit>
        </div>
        <SqlCode code={`"INSERT INTO contact(name, email, address) VALUES (?,?,?)"`}></SqlCode>
      </div>
    </div>
  );
};

export default Insert;
