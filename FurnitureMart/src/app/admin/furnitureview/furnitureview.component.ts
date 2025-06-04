import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-furnitureview',
  templateUrl: './furnitureview.component.html',
  styleUrls: ['./furnitureview.component.scss']
})
export class FurnitureviewComponent {
  public FurnituredataArray:any[]=[];
  public CategorydataArray:any[]=[];
  furnitureview!:FormGroup;
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }
  ngOnInit(): void {
  this.furnitureview=this.fb.group({
    categoryid:[''],
  })
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
    Deletefurnituredata(furnitureid: string) 
    {
    this.db.Deletefurnituredata({ furnitureid }).then((confirmation: any) => {
    if (confirmation.message === "Success") {
    alert('Sucessfully Deleted')
    this.db.locationview();
    }
    })
    }
}
