const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "sat",
  password: "s12345",
  database: "sql_project",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET Data in mysql DBMS 

app.get("/api/get",(req,res)=>{
  const sqlGet = "SELECT * FROM contact"
  db.query(sqlGet,(err,res)=>{
    res.send(res)
  })
})

// INSERT Data in mysql DBMS 

app.get("/api/post",(req,res)=>{
  const {name,email,contact} = req.body;
  const sqlInsert = "INSERT INTO `contact`(`name`, `email`, `contact`) VALUES (?,?,?)"
  db.query(sqlInsert,[name,email,contact],(err,res)=>{
    if(err){
      console.log(err);
    }else{
      res.send("Data is Insert")
    }
  });
})




app.get("/", (req, res) => {
    res.send("Running Server");
  });




app.listen(port, () => {
  console.log("Server is Running");
  console.log(`Example app listening at http://localhost:${port}`);
});
