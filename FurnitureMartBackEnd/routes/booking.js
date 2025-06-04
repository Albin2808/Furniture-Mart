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
    let loginid = req.body.loginid;
    let grndtotal = req.body.grndtotal;
    let status = "added";
    var regdate = new Date();

    let strquery = "INSERT INTO tbl_bookingmaster(loginid,bookingdate,grndtotalamount,status) VALUES(?,?,?,?)";
    con.query(strquery, [loginid, regdate, grndtotal, status], (err, result) => {
        if (err) throw err;
        let masterid = result.insertId;
        console.log(masterid);

        let query2 = `SELECT * FROM tbl_cart c INNER JOIN tbl_furniture f ON c.furnitureid=f.furnitureid WHERE c.loginid='${loginid}' ;`;
        console.log(query2);
        con.query(query2, (err, result2) => {
            if (err) throw err;

            Object.keys(result2).forEach(function (key) {
                var row2 = result2[key];
                let furnitureid = row2.furnitureid;
                let unitprice = row2.amount;
                let quantity = row2.quantity;
                let totalamount = row2.totalamount;

                let query1 = `SELECT max(bookingmasterid) as masterid FROM tbl_bookingmaster ;`;

                con.query(query1, (err, result1) => {
                    if (err) throw err;

                    var row1 = result1[0]; // Assuming only one row is returned
                    let bookingmasterid = row1.masterid;

                    let strquery1 = `INSERT INTO tbl_bookingdetails(loginid,furnitureid,bookingmasterid,quantity,totalamount) VALUES (?,?,?,?,?);`;
                    con.query(strquery1, [loginid, furnitureid, bookingmasterid, quantity, totalamount], (err) => {
                        if (err) throw err;

                        console.log(strquery1, [loginid, furnitureid, bookingmasterid, quantity, totalamount]);
                        console.log(strquery1);
                       
                    });
                  
                });
            });
            res.send({ message: 'Success' });
            // let query3 = `DELETE FROM tbl_cart WHERE loginid='${loginid}';`;

            // con.query(query3, (err, rows) => {
                // if (err) throw err;

                // res.send({ message: 'Success' });
            // });
        });
    });
});

module.exports = router;
