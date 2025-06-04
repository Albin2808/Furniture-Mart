var mysql = require('mysql');
const nodemailer = require("nodemailer");
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_furnituremart"
});

router.post('/', (req, res) => {
    const { username, email } = req.body;
    if (!email) {
        return res.json({ message: 'Error', error: 'Email is required' });
    }

    const generatedPassword = generateRandomPassword(8); // Change 8 to the desired password length
    const updatePasswordQuery = `UPDATE tbl_login SET password = '${generatedPassword}' WHERE username = '${username}'`;

    con.query(updatePasswordQuery, (err, results) => {
        if (err) {
            console.error('Error updating password:', err);
            res.json({ message: 'Error', error: 'Internal server error' });
        } else {
            if (results.affectedRows > 0) {
                sendResetPasswordEmail(email, generatedPassword);

                res.json({ message: 'Success' });
            } else {
                res.json({ message: 'Error', error: 'Username not found' });
            }
        }
    });
});

function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function sendResetPasswordEmail(email, generatedPassword) {
    const mailOptions = {
        from: `"Furniture Mart" <albinabraham0820@gmail.com>`,
        to: email,
        subject: "Password Reset",
        html: `Your new password is: ${generatedPassword}`
    };

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "albinabraham0820@gmail.com",
            pass: "kory xjvl ztkt ytqt"
        }
    });

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error('Error sending email:', err);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = router;
