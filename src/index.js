const mysql = require("mysql2");
const express = require("express");
const { listenerCount } = require("process");

const app = express();

app.listen(3000, () => console.log("server started http://localhost:3000"));

const connection = mysql.createConnection({
  host: "devstart.ca8wsggzuflh.us-east-1.rds.amazonaws.com",
  user: "admin",
  database: "DevStart_Luiz",
  password:"S2[W}vG$3P#!b%]Z)Pa}A{2+G",

});

connection.query(
  'SELECT * FROM `tb_empregado` ',
  function (err, results, fields) {
    console.log(results);
  }
);
