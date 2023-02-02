const express = require("express");
const path = require("path")

const router = express.Router();

// Routing

router.get('/',(req, res)=>{

    res.sendFile('/index.html', "{root: __dirname}");
    // res.render('index.html');
});

router.get('/employee_portal',(req, res)=>{
    res.render('employee_portal.html');
});

module.exports = router;