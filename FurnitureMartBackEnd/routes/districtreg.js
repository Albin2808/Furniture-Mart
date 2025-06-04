
var mysql = require('mysql')
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_furnituremart"
});
/* GET users listing. */
router.post('/', function (req, res, next) {
    let districtname = req.body.districtname;
    let query = `SELECT * FROM tbl_district where district_name='${districtname}';`;

    con.query(query, (err, rows) => {
        if (err){ throw err;
         } 
         if (rows == "") {
            let strquery = `INSERT INTO tbl_district(district_name) VALUES(?);`;
            con.query(strquery, [districtname])
            res.send({ message: 'success' })
        } else {
            res.send({
                message: 'Failed'
            })
        }
        // console.log("1 record inserted");
    });
});
module.exports = router;


