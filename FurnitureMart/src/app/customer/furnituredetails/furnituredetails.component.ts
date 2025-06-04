import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-furnituredetails',
  templateUrl: './furnituredetails.component.html',
  styleUrls: ['./furnituredetails.component.scss']
})
export class FurnituredetailsComponent {
  public FurnituredataArray: any[] = [];
  furnitureview!: FormGroup;
  furnitureid: any;
  totalamount: any;
  loginid:any;
  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => { this.furnitureid = Params.get('id') })
  }
  ngOnInit(): void {

    const id = this.furnitureid;
    this.db.furnituredetails({ id }).then((data: any) => {
      this.FurnituredataArray = data;

    });
    this.furnitureview = this.fb.group({
      furnitureid:this.furnitureid,
      quantity: [''],
      // requestdate: [''], 
    loginid:this.loginid =localStorage.getItem('loginid') ,
      totalamount: [''],
      stockdetails:[''],

    })
    this.db.furnituredetails({id}).then((data:any)=>{
      this.FurnituredataArray=data;
      console.log(this.FurnituredataArray);
    this.furnitureview.setValue({
      // furnitureid:this.furnitureid,
    stockdetails:data[0].stock,
    });
    });
  }
  onChange() {
    const quantity = this.furnitureview.value.quantity;
    console.log(quantity)
    this.totalamount = this.furnitureview.value.quantity * this.FurnituredataArray[0].amount;
    console.log(this.totalamount)
    this.furnitureview.get("totalamount")?.setValue(this.totalamount)
  }

  OnSubmit() {
    console.log(this.furnitureview.value);
    this.db.addtocart(this.furnitureview.value).then((confirmation: any) => {
      if (confirmation.message == "Success") {
        alert('Request details Inserted');
        this.router.navigate(["/customermaster/cart"]);
      } else {
        alert('Data not inserted, please check your data');
      }
    });
  }
}   