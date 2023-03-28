var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Achu04@ash"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});