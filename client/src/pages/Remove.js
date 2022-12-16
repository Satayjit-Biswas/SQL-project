import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import SqlCode from "../components/SqlCode";
import "./Remove.css";
function Remove() {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    loadData();
  }, [data]);
  const handleDelete = (id) => {
    if (window.confirm("Are sure Dalete Data...!")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("Delete your data..");
    }
  };
  return (
    <div className="remove_area">
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
                        handleDelete(item.id);
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
          <SqlCode code={`DELETE FROM contact WHERE id = ?`}></SqlCode>
        </div>
      </div>{" "}
    </div>
  );
}

export default Remove;
