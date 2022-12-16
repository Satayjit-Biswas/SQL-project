import React from "react";
import "./SqlCode.css";
function SqlCode(props) {
  return (
    <div className="sql_area">
      <h4>SQL QYERY CODE :</h4>
      <p>{props.code}</p>
    </div>
  );
}

export default SqlCode;
