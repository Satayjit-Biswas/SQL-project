import axios from "axios";
import React, { useEffect, useState } from "react";
import SqlCode from "../components/SqlCode";
import "./Insert.css";

const Find = () => {
  const [state, setState] = useState({});
  const { name } = state;
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
    // console.log(response.data);
  };
  useEffect(() => {
    if(!state.name){
        loadData();
    }else{
      find(state);
    }
  }, [data]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const find =(text) =>{
    axios
      .get(`http://localhost:5000/api/find/${text.name}`)
      .then((res) => setData(res.data));
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
          </tr>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className="footer_area">
        <div className="input_area">
        <h4> SEARCH DATA :</h4>
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
        </form>
        </div>
        <SqlCode code={`"SELECT * FROM contact WHERE name like '% ? %'"`}></SqlCode>
      </div>
    </div>
  );
};

export default Find;
