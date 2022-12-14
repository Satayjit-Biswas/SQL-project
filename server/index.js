const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "s12345",
  database: "sql_project",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/get",(req,res)=>{
  const sqlGet = "SELECT * FROM contact"
  db.query(sqlGet,(err,result)=>{
    res.send(result)
  })
})
app.get("/", (req, res) => {
  // const sqlinsert =
  //   "INSERT INTO `contact`(`name`, `email`, `contact`) VALUES ('gisan','Satayjit@gmaul.com','jamalpur')";
  // db.query(sqlinsert, (err, result) => {
  //   console.log("error",err);
  //   console.log("result",result);
    res.send("Running Server");
  // });
});
app.listen(port, () => {
  console.log("Server is Running");
  console.log(`Example app listening at http://localhost:${port}`);
});
