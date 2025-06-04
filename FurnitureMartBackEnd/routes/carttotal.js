var mysql = require('mysql')
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_furnituremart"
});

router.post('/',(req,res,next)=>{ 
    let loginid=req.body.loginid
    let strquery =` SELECT sum(totalamount)as grndtotal from tbl_cart where loginid='${loginid}'`; 
  // console.log(query);
  con.query(strquery,(err,rows) => {
    if (err) throw err;
    res.send(rows);
    });
    });
    module.exports = router;