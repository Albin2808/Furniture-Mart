import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-paymentconfirmation',
  templateUrl: './paymentconfirmation.component.html',
  styleUrls: ['./paymentconfirmation.component.scss']
})
export class PaymentconfirmationComponent {
  paymentform: any;
  loginid: string;
  carttotaldataArray: any;
  grndtotal: any;
  customerName: string;
  customerEmail: string;
  customerdataArray: any;

  constructor(
    private db: DbserviceService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.paymentform = this.fb.group({
      loginid: localStorage.getItem('loginid'),
      grndtotal: localStorage.getItem('grndtotal')
    });

    this.loginid = localStorage.getItem('loginid'); 
    this.db.getcustomer({ id: this.loginid }).then((data: any) => { 
      this.customerdataArray = data;
    });

    const loginid = localStorage.getItem('loginid');
    this.db.carttotal({ loginid }).then((data: any) => {
      this.carttotaldataArray = data;
      this.grndtotal = this.carttotaldataArray[0].grndtotal;
      localStorage.setItem('grndtotal', this.grndtotal);
    });
  }

  OnSubmit() {
    
    this.db.paymentconfirm(this.paymentform.value).then((confirmation: any) => {
      if (confirmation.message == "Success") {
        this.router.navigate(['/customermaster/customerhome']);
      } else {
        alert('Data not inserted, please check your data');
      }
    });
  }

}
