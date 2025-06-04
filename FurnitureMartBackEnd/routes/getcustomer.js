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
    let loginid = req.body.id;
    let query = `SELECT * FROM tbl_customer c inner join tbl_district d on d.district_id=c.district_id inner join tbl_location l on l.locationid=c.locationid where loginid='${loginid}'`;
    console.log(query);
    con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
});
});
module.exports = router;    