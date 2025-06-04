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
    let query = `INSERT INTO tbl_cart(loginid,furnitureid,quantity,totalamount,status) VALUES (?,?,?,?,?);`;
    console.log(query)
    let loginid = req.body.loginid;
    let furnitureid = req.body.furnitureid;
    let quantity = req.body.quantity;
    let totalamount = req.body.totalamount;
    let status = "added";
    con.query(query, [loginid, furnitureid, quantity, totalamount, status])
    console.log(query, [loginid, furnitureid, quantity, totalamount, status]);
    res.send({ message: 'Success' })
})
module.exports = router;