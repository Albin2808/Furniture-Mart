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
    let district_id = req.body.district_id;
    let loginid = req.body.loginid;  // Corrected variable name
    let locationid = req.body.locationid;
    let name = req.body.name;
    let email = req.body.email;  // Corrected variable name
    let contact = req.body.contact;  

    let strquery = `UPDATE tbl_customer SET district_id='${district_id}', loginid='${loginid}', locationid='${locationid}', name='${name}', email='${email}', contact='${contact}' WHERE loginid='${loginid}'`;

    console.log(strquery);

    con.query(strquery, (err, rows) => {
        if (err) throw err;
        res.send({ message: 'Success' });
    });
});

module.exports = router;
