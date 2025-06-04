
var mysql = require('mysql')
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_furnituremart"
});
router.post('/', (req, res, next) => {
    let id = req.body.id;
    //console.log(districtid);
    let query = `SELECT * FROM tbl_furniture f inner join tbl_category c on c.categoryid=f.categoryid where f.categoryid='${id}'`;
    console.log(query);
    con.query(query,(err,rows) => {
    if (err) throw err;
    res.send(rows);
    });
    });
    module.exports = router;
    