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
    let query = `INSERT INTO tbl_furniture(furniturename,description,size,categoryid,amount,fimage) VALUES (?,?,?,?,?,?);`;
    console.log(query);
    let fname = req.body.fname;
    let Description = req.body.description;
    let fimage = req.body.fimage;
    let categoryid = req.body.categoryid;
    let size = req.body.size;
    let amount = req.body.amount;
    con.query(query, [fname, Description, size, categoryid, amount, fimage])
    console.log(query, [fname, Description, size, categoryid, amount, fimage,]);
    res.send({ message: 'Success' })
})
module.exports = router;