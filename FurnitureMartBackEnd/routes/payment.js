
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
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

        let query = `INSERT INTO tbl_payment(masterid,paymentdate,totalamount) VALUES (?,?,?);`;
        var paymentdate=new Date()
        let totalamount= req.body.grndtotal;
        let loginid= req.body.loginid;
        
        con.query(query,[masterid,paymentdate,totalamount], (err, result) => {
            if (err) throw err;

            console.log(query,[masterid,paymentdate,totalamount]);
            // res.send({ message:'success'})

          
        });


        let query2 = `SELECT * FROM tbl_cart c INNER JOIN tbl_furniture f ON c.furnitureid=f.furnitureid WHERE c.loginid='${loginid}' ;`;
        console.log(query2);
        con.query(query2, (err, result2) => {
            if (err) throw err;

            Object.keys(result2).forEach(function (key) {
                var row2 = result2[key];
                let furnitureid = row2.furnitureid;
                let quantity = row2.quantity;
                let stock = row2.stock;

                let newstock= +stock-quantity;
                console.log("newstock",newstock);

                // let query1 = `SELECT max(bookingmasterid) as masterid FROM tbl_bookingmaster ;`;

                // con.query(query1, (err, result1) => {
                //     if (err) throw err;

                //     var row1 = result1[0]; // Assuming only one row is returned
                //     let bookingmasterid = row1.masterid;

                    let strquery1 = `UPDATE tbl_furniture SET stock='${newstock}' where furnitureid='${furnitureid}';`;
                    con.query(strquery1, (err, rows) => {
                       
                    });
                  
                // });
            });



            // res.send({ message: 'Success' });
            // let query3 = `DELETE FROM tbl_cart WHERE loginid='${loginid}';`;

            // con.query(query3, (err, rows) => {
            //     if (err) throw err;

                res.send({ message: 'Success' });
            });
        });

    });
// });

module.exports = router;