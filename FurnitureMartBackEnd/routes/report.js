
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
    let qry=`SELECT * FROM tbl_bookingmaster b inner join tbl_bookingdetails d on d.bookingmasterid=b.bookingmasterid inner join tbl_furniture f on f.furnitureid=d.furnitureid WHERE bookingdate>'${startdate}' and bookingdate<'${enddate}'`; 
    console.log(qry) 
    con.query(qry,(err,row)=>{ 
        if (err) throw err; 
        res.send(row); 
    }); 
 
}); 
 
module.exports = router;