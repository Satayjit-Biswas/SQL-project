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
  db.query(sqlGet,(err,result)=>{
    res.send(result);
  });
});

// INSERT Data in mysql DBMS 

app.post("/api/post",(req,res)=>{
  const {name,email,address} = req.body;
  const sqlInsert = "INSERT INTO contact(name, email, address) VALUES (?,?,?)"
  db.query(sqlInsert,[name,email,address],(err,res)=>{
    if(err){
      console.log(err);
    }else{
      console.log(name,email,address);
    }
  });
})


// Remove Data in mysql DBMS 

app.delete("/api/remove/:id",(req,res)=>{
  const {id} = req.params;
  const sqlRemove = "DELETE FROM contact WHERE id = ?"
  db.query(sqlRemove,id,(err,res)=>{
    if(err){
      console.log(err);
    }else{
      console.log("Delete Data");
    }
  });
})

// Single Data in mysql DBMS 

app.get("/api/get/:id",(req,res)=>{
  const {id} = req.params;
  const sqlGet = "SELECT * FROM contact WHERE id = ?"
  db.query(sqlGet,id,(err,result)=>{
    res.send(result);
  });
})


// Update Data in mysql DBMS 

app.put("/api/update/:id",(req,res)=>{
  const {id} = req.params;
  const {name,email,address} = req.body;
  const sqlUpdate = "UPDATE contact SET name = ? , email = ? , address = ? WHERE id = ? ";
  db.query(sqlUpdate,[name,email,address,id],(err,res)=>{
    if(err){
      console.log(err);
    }else{
      console.log("Get Data");
    }
  });
})

// Single Data in mysql DBMS 

app.get("/api/find/:text",(req,res)=>{
  const text = req.params;
  const sqlGet = `SELECT * FROM contact WHERE name like '%${text.text}%'`
  db.query(sqlGet,(err,result)=>{
    res.send(result);
  });
})

app.get("/", (req, res) => {
    res.send("Running Server");
  });




app.listen(port, () => {
  console.log("Server is Running");
  console.log(`Example app listening at http://localhost:${port}`);
});
