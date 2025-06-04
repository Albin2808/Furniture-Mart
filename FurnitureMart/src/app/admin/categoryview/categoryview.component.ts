import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.scss']
})
export class CategoryviewComponent {
  public CategorydataArray:any[]=[];
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }
  ngOnInit(): void {
  this.db.categoryview().then((data:any)=>{
   this.CategorydataArray=data; 
  })
  }
  Deletecategorydata(categoryid: string) 
  {
  this.db.Deletecategorydata({ categoryid }).then((confirmation: any) => {
  if (confirmation.message === "Success") {
  alert('Sucessfully Deleted')
  window.location.reload();
  this.db.categoryview();
  }
  })
  }
    }
