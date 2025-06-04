import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {
  newpassword: FormGroup;

  constructor(private fb: FormBuilder,private router: Router, private db: DbserviceService) {}
  ngOnInit(): void {
      this.newpassword = this.fb.group({
          currentPassword: [''],
          newPassword: [''],
          loginid: localStorage.getItem('loginid'),
      });
    }

  OnSubmit() 
  {
    console.log(this.newpassword.value)
    this.db.changepassword(this.newpassword.value).then((confirmation:any)=>{ 
      if(confirmation.message == "Success")
      { 
        alert('Registered Successfully') 
        this.router.navigate(['/guestmaster/login'])
     } 
     else 
     { 
      alert('Data do not insert,please check')
  }
  
})
}
}
