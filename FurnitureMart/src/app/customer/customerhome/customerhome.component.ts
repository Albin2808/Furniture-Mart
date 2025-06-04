import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.scss']
})
export class CustomerhomeComponent {
  public FurnituredataArray:any[]=[];
  public CategorydataArray:any[]=[];
  furnitureview: any;
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }
  ngOnInit(): void {
    this.furnitureview=this.fb.group({
      categoryid:[''],
  
    })
  this.db.furnitureview().then((data:any)=>{
  this.FurnituredataArray=data;
  // console.log(data);
  });
  this.db.categoryview().then((data:any)=>{
    this.CategorydataArray=data;
    // console.log(data);
    });
  }
  onChange() {
    const id=this.furnitureview.value.categoryid;
    console.log(id)
    this.db.getfurniturebyid({id}).then((data:any) =>{
    this.FurnituredataArray = data;
    console.log(this.FurnituredataArray)
    });
    }
}
