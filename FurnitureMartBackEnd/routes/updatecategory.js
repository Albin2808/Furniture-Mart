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
    let categoryid = req.body.categoryid;
    let categoryname = req.body.categoryname;
    let description = req.body.description;
    let image = req.body.image;
    let strquery = `UPDATE tbl_category SET categoryname='${categoryname}',description='${description}',image='${image}' where categoryid='${categoryid}'`;
    console.log(strquery)
    con.query(strquery, (err, rows) => {
    if (err) throw err;
    res.send({message:'Success'})
});
})
module.exports = router;    