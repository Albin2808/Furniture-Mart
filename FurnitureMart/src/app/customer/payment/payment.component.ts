import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
  public cartdataArray: any[] = [];
  carttotaldataArray: any;
  paymentform!: FormGroup;
  cartid: any;
  masterid: any;
  loginid: any;
  grndtotal: any;
  customerdataArray: any;

  constructor(
    private db: DbserviceService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.paymentform = this.fb.group({
      loginid: localStorage.getItem('loginid'),
      grndtotal: localStorage.getItem('grndtotal')
    });

    this.loginid = localStorage.getItem('loginid');
    const id = this.loginid;
    this.db.viewcartdetails({ id }).then((data: any) => {
      this.cartdataArray = data;
    });
    this.db.getcustomer({ id }).then((data: any) => {
      this.customerdataArray = data;
    });

    const loginid = localStorage.getItem('loginid');
    this.db.carttotal({ loginid }).then((data: any) => {
      this.carttotaldataArray = data;
      this.grndtotal = this.carttotaldataArray[0].grndtotal;
      localStorage.setItem('grndtotal', this.grndtotal);
      console.log(this.grndtotal);
    });
  }

  OnSubmit() {
    this.db.payment(this.paymentform.value).then((confirmation: any) => {
      if (confirmation.message == "Success") {
        // Pass form data to confirmation page
        this.router.navigate(['/customermaster/paymentconfirmation'], { state: { formData: this.paymentform.value } });
      } else {
        alert('Data not inserted, please check your data');
      }
    });
  }
}
