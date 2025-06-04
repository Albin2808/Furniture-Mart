import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  public cartdataArray: any[] = [];
  cartview!: FormGroup;
  cartid: any;
  // loginid: any;
  masterid: any;
  carttotaldataArray: any;
  amount:any;
  grndtotal:any;
  totalamount:any;
  constructor(private fb: FormBuilder, private db: DbserviceService, private router: Router, private route: ActivatedRoute) {
    route.paramMap.subscribe((Params: ParamMap) => { this.cartid = Params.get('id') })
  }
  ngOnInit(): void {

    // const id = this.cartid;
    // this.db.cartview({ id }).then((data: any) => {
    //   this.cartdataArray = data;
    // })

    this.cartview = this.fb.group({
      furnitureid: [''],
      quantity: [''],
      loginid: localStorage.getItem('loginid'),
      totalamount:[''],
      grndtotal: localStorage.getItem('grndtotal'),

    //   totalamount:this.totalamount = localStorage.getItem('totalamount'),
    // grndtotal:localStorage.setItem("grndtotal",this.grndtotal),
    // totalamount:localStorage.setItem('totalamount',this.carttotaldataArray[0].totalamount),
    // grndtotal:localStorage.setItem('grndtotal',this.grndtotal)
     

    })

   
      

    const loginid = localStorage.getItem('loginid');
    this.db.carttotal({ loginid }).then((data: any) => {
      this.carttotaldataArray = data;
      this.amount=data[0].grndtotal;
      
      localStorage.setItem("grndtotal",this.amount);
      console.log(this.amount)
      
    });

    this.db.cartview({ loginid }).then((data: any) => {
      this.cartdataArray = data;
      console.log(this.cartdataArray);
      localStorage.setItem("masterid",this.masterid);
      console.log(this.masterid)
      this.cartview.setValue({
        furnitureid: data[0].furnitureid,
        quantity: data[0].quantity,
        loginid: localStorage.getItem('loginid'),
         totalamount:data[0].totalamount,
         grndtotal:localStorage.getItem('grndtotal'),
          
       
      });
    }
    )
  }

  
  Deletecartdata(cartid: string) {
    this.db.Deletecartitem({ cartid }).then((confirmation: any) => {
      if (confirmation.message === "Success") {
        alert('Sucessfully Deleted')
      }
    })
  }
  onsubmit() {
    console.log(this.cartview.value)
    this.db.booking(this.cartview.value).then((confirmation: any) => {
      if (confirmation.message == "Success") {
        alert('Proceed to delivery')
        this.router.navigate(['/customermaster/delivery'])
      }
      else {
        // var totalamount = this.carttotaldataArray[0].totalamount;
        // localStorage.setItem("totalamount", totalamount);
        // console.log("totalamount:", totalamount);
      }

    }
    )
  }
}