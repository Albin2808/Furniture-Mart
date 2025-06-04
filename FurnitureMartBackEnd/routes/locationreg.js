var mysql = require('mysql');
var express = require('express');
var router = express.Router(); 
var con = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database: "db_furnituremart" 
}); 

router.post('/',(req,res,next)=>{ 
  let districtid=req.body.districtid;
    let location_name= req.body.locationname;
      let strquery = `INSERT into tbl_location (district_id,location) VALUES(?,?)`;
      con.query(strquery,  [districtid,location_name])
      res.send({ message: 'Success' })
      
}) 
 module.exports=router;