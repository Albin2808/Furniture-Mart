
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "db_furnituremart"
});
router.post('/', function(req, res, next) { 
    let startdate=req.body.startdate; 
    let enddate=req.body.enddate; 
    let qry=`SELECT * FROM tbl_payment p INNER JOIN tbl_bookingmaster bd ON p.masterid = bd.bookingmasterid inner join tbl_customer c on c.customerid WHERE p.paymentdate > '${startdate}' AND p.paymentdate < '${enddate}'`;
    console.log(qry) 
    con.query(qry,(err,row)=>{ 
        if (err) throw err; 
        res.send(row); 
    }); 
 
}); 
 
module.exports = router;