
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
    
        let loginid= req.body.loginid;
        
       
            let query3 = `DELETE FROM tbl_cart WHERE loginid='${loginid}';`;

            con.query(query3, (err, rows) => {
                if (err) throw err;

                res.send({ message: 'Success' });
            });
        });


module.exports = router;