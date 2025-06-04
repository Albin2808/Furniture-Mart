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
    let query1 = `SELECT max(bookingmasterid) as masterid FROM tbl_bookingmaster ;`

    con.query(query1, (err, result1) => {
        if (err) throw err;

        var row1 = result1[0]; // Assuming only one row is returned
        let masterid = row1.masterid;

    let query = `INSERT INTO tbl_deliveryaddress(masterid,district_id,locationid,name,housename,pincode,contact,place,landmark) VALUES (?,?,?,?,?,?,?,?,?);`;
    
    let district_id = req.body.district_id;
    let locationid = req.body.locationid;
    let name = req.body.name;
    let housename = req.body.housename;
    let pincode = req.body.pincode;
    let contact = req.body.contact;
    let place = req.body.place;
    let landmark = req.body.landmark;
    con.query(query, [masterid, district_id, locationid, name, housename,pincode,contact,place,landmark])
    console.log(query, [masterid, district_id, locationid, name, housename,pincode,contact,place,landmark]);
    res.send({ message: 'success' })
})

});


module.exports = router;