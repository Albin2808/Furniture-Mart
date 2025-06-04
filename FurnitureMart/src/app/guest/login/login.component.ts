import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent 
{
  public LoginArray:any[]=[];
  // validationstatus=null;
  constructor(private fb: FormBuilder,private router:Router,private dbservice:DbserviceService) { }
  LoginFormGroup=this.fb.group({
    username: [''],
  password: [''],
  })
  OnSubmit(){
    console.log(this.LoginFormGroup.value)
    this.dbservice.login(this.LoginFormGroup.value).then((data:any)=>{
    this.LoginArray=data;
    // console.log(data)
    if(data==""){
    alert ('invalid username and password')
    this.router.navigate(['/guestmaster/login'])
    return
    }
    else {
    // console.log(this.LoginArray)
    var role = this.LoginArray[0].role;
    // console.log(role)
    localStorage.setItem("loginid",this.LoginArray[0].loginid);
    localStorage.setItem("username",this.LoginArray[0].username)
    // var status = this.LoginArray[0].status;
    // console.log(status)
    if(role == "ADMIN")
    {
    this.router.navigate(['/adminmaster/adminhome'])
    }
    else
    {
  
    }
    if(role == "CUSTOMER")
    {
    this.router.navigate(['/customermaster/customerhome'])
    }
    else
    {

    }
    }
    })
    }
  }