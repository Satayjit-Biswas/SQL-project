import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Insert.css";

const Update = () => {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="container">
      <div className="table">
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Update;
