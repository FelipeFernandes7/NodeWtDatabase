const mysql = require("mysql2");
const express = require("express");
const { response } = require("express");
const app = express();

app.get('/', (req,res) => {
    res.send('Hello World')
});
app.listen(3000, () => console.log("server started http://localhost:3000"));

const connection = mysql.createConnection({
  host: "devstart.ca8wsggzuflh.us-east-1.rds.amazonaws.com",
  user: "admin",
  database: "DevStart_Luiz",
  password: "S2[W}vG$3P#!b%]Z)Pa}A{2+G",
});

connection.query(
  "SELECT * FROM `tb_empregado` ",
  function (err, results, fields) {
    console.log(results);
  }
);
