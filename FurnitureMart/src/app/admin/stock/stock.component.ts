import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent {
  furnitureid: any;
  FurnituredataArray:any;
  stockregformgroup!: FormGroup;
  furniturename: any;
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService,private route:ActivatedRoute) { 
    route.paramMap.subscribe((Params:ParamMap)=>{this.furnitureid=Params.get('id')})
    }
  
   ngOnInit(): void
  {
   this.stockregformgroup = this.fb.group({ 
      furnitureid:this.furnitureid, 
      furniturename:[''],
      stockdetails:[''],
      newstock:[''],
    });
    const id=this.furnitureid;
    this.dbservice.furnituredetails({id}).then((data:any)=>{
      this.FurnituredataArray=data;
      console.log(this.FurnituredataArray);
    this.stockregformgroup.setValue({
      furnitureid:this.furnitureid,
    furniturename:data[0].furniturename,
    stockdetails:data[0].stock,
    newstock:""
    });
})
  }

  OnSubmit() 
  {
    console.log(this.stockregformgroup.value);
    this.dbservice.stockreg(this.stockregformgroup.value).then((confirmation: any) => 
    {
      if (confirmation.message == 'success') 
      {
        alert('Registered Successfully');
        this.router.navigate(['/adminmaster/furnitureview']);
      } 
      else 
      {
        alert('Data do not insert, please check');
      }
    });
  }
}
