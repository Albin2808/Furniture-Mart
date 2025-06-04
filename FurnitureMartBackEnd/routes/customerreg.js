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

router.post('/',(req,res,next)=>{
  let name = req.body.name;
  let contact = req.body.contact;
  let email = req.body.email;
  let district_id = req.body.district_id;
  let locationid = req.body.locationid;
  // let loginid = req.body.loginid;
  var regdate = new Date();
  let username = req.body.username;
  let password = req.body.password;
  let role = "CUSTOMER";
  let status = "CONFIRMED";
  //inserting data to login table
  let strquery = "INSERT INTO tbl_login(username,password,role,status) VALUES(?,?,?,?)";
  console.log(strquery)
  console.log(strquery,[username,password,role,status])
  con.query(strquery, [username,password,role,status],(err,result)=>{
  //finding login id from login table
  //let query1 = SELECT MAX(login_id) as login_id from tbl_login;
  // console.log(query1)
  if(err)throw err
  let loginid = result.insertId;
  console.log(loginid)
  //inserting data to customer table with loginid from login table
  let strquery1=`INSERT INTO tbl_customer(name,email,contact,loginid,district_id,locationid,regdate) VALUES(?,?,?,?,?,?,?)`;
  console.log(strquery1);
  console.log(strquery1,[name,email,contact,loginid,district_id,locationid,regdate]);
  con.query(strquery1,[name,email,contact,loginid,district_id,locationid,regdate]);
  res.send({ message: 'Success' })
     
        const mailOptions = { 
            from: `"Furniture Mart", "albinabraham0820@gmail.com"`, 
            to: `${email}`, 
            subject: "Furniture Mart Customer Registration", 
            html: `Welcome to the Furniture mart Online Shopping website<br>
            Dear,'${name}'<br>
            Your username:'${username}'<br>
            Your Password:'${password}'` 
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
     
          transporter.sendMail(mailOptions,  (err, info) => { 
            if(err)  
                console.log(err); 
             
            console.log(info); 
          }) 
          console.log(123) 
     
    }); 
  })
         
       
    //   let age=req.body.txtage; 
    //   let pswd=req.body.txtpswd; 
     
    module.exports = router; 
