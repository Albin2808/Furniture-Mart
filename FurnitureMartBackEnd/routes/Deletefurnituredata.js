var mysql = require('mysql');
var express = require('express');
var router = express.Router(); 
var con = mysql.createConnection({ 
host: "localhost", 
user: "root", 
password: "", 
database: "db_furnituremart" 
}); 
router.post('/', (req, res, next) => {
    let furnitureid = req.body.furnitureid;
    let query = `DELETE FROM tbl_furniture WHERE furnitureid='${furnitureid}';`;
    con.query(query,(err,rows) => {
    if (err) throw err;
    res.send({message:'Success'}
    );
    });
    });
    module.exports = router;