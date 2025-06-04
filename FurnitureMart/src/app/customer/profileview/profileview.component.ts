import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.scss']
})
export class ProfileviewComponent {
  loginid: string;
  customerdataArray: any;
 
  constructor(private db:DbserviceService, private router: Router,private fb:FormBuilder){}
  ngOnInit(): void {
    this.loginid = localStorage.getItem('loginid');
    const id = this.loginid;
    this.db.getcustomer({ id }).then((data: any) => {
      this.customerdataArray = data;
    });

  }
}
