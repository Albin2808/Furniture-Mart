
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "db_furnituremart"
});
/* GET users listing. */
router.post('/', function (req, res, next) {
   let furnitureid = req.body.furnitureid;
   let currentstock = req.body.stockdetails;
   let add=req.body.newstock;
     let newstock= (+currentstock) + (+add);
     console.log(newstock);
     var stockdate=new Date()

 let query = `UPDATE tbl_furniture  SET  stock="${newstock}"  WHERE furnitureid='${furnitureid}'`;
 console.log(query)
 con.query(query, (err,rows)=>{
   if(err) throw err;
   
         let strquery = `INSERT INTO tbl_stock (furnitureid, stockquantity,stockdate) VALUES (?,?,?)`;
         con.query(strquery, [furnitureid, newstock, stockdate])
         console.log(strquery)
         res.send({ message: 'success' })

});
});

module.exports = router;