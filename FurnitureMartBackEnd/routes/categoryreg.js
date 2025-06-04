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
    let CName = req.body.categoryname;
    let Description = req.body.description;
    let Cimage = req.body.image;
    let query = `SELECT * FROM tbl_category where categoryname='${CName}';`;
    con.query(query, (err, rows) => {
        if (err) {
            throw err;
        }
        if (rows == "") {
            let query = `INSERT INTO tbl_category(categoryname,description,image) VALUES (?,?,?);`;
            con.query(query, [CName, Description, Cimage]);
            console.log(query, [CName, Description, Cimage]);
            res.send({ message: 'Success' })
        }
        else {
            res.send({
                message: 'Failed'
            })
        }
        // console.log("1 record inserted");
    });
});
module.exports = router;