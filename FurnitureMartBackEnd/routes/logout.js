var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_furnituremart"
});

router.post('/', (req, res) => {
    const { loginid } = req.body;

    if (!loginid) {
        return res.status(400).json({ message: 'Login ID is required for logout' });
    }

    // Your database logic to update the session or perform logout
    const updateQuery = `UPDATE tbl_login SET loginid = NULL WHERE loginid = '${loginid}';`;

    con.query(updateQuery, [loginid], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (result.affectedRows > 0) {
            // Send the redirect URL in the response
            return res.json({ message: 'Logout successful', redirectUrl: '/guestmaster/login' });
        } else {
            return res.status(401).json({ message: 'Invalid login ID' });
        }
    });
});

module.exports = router;
