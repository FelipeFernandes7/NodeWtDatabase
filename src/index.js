const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:'devstart.ca8wsggzuflh.us-east-1.rds.amazonaws.com',
    user:'admin',
    database:'DevStart_Luiz',
    waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

connection.query(
    'SELECT * FROM `tb_empregado` WHERE `nome_emp`= "cargo"',
    function(err, results, fields){
        console.log(results);
    }
)