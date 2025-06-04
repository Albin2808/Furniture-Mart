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
    let cartid = req.body.loginid;
    let query = `SELECT * FROM tbl_cart c INNER JOIN tbl_furniture f ON c.furnitureid=f.furnitureid  WHERE c.loginid='${cartid}'`;
    console.log(query);
    con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
});
});
module.exports = router;