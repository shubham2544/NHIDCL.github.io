const { urlencoded } = require("express");
const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({path:'./.env'})
const app = express();
const port = 8000;

// Creating connection with database

const con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});
  
app.use(express.urlencoded({extends: false}));

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected with database");
    // con.query("SELECT * FROM users", function (err, result, fields) {
    //   if (err) throw err;
    //   console.log(result);
    // });
});

// Routing

app.get("/",(req, res)=>{
    res.sendFile('/index.html', {root: __dirname});
});

// app.get("/employee_portal",(req, res)=>{
//     res.render("/employee_portal.html");
// });

// app.use('/', require('./routes/pages'));
// app.use('/employee_portal', require('./routes/pages'));

app.listen(8000, () =>{
    console.log("Server started on port 8000");
})