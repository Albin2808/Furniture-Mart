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
    let furnitureid = req.body.furnitureid;
    let furniturename = req.body.furniturename;
    let description = req.body.description;
    let categoryid = req.body.categoryid;
    let size = req.body.size;
    let amount = req.body.amount;
    let fimage = req.body.fimage;

    // Construct the SQL query with placeholders to prevent SQL injection
    let strquery = `UPDATE tbl_furniture SET furniturename=?, categoryid=?, description=?, size=?, amount=?, fimage=? WHERE furnitureid=?`;

    // Execute the query with prepared statement
    con.query(strquery, [furniturename, categoryid, description, size, amount, fimage, furnitureid], (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: 'Internal server error' });
        } else {
            res.send({ message: 'Success' });
        }
    });
});

module.exports = router;
