import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-datewisereport',
  templateUrl: './datewisereport.component.html',
  styleUrls: ['./datewisereport.component.scss']
})
export class DatewisereportComponent {
  reportdetails: any;
  constructor(private fb:FormBuilder,private router:Router,private db:DbserviceService){} 
       
     
      ngOnInit(): void { 
        
      } 
       
      reportformgroup=this.fb.group({ 
        startdate:[''], 
        enddate:[''] 
      }) 
     
 
  
      OnSubmit(){ 
      this.db.report(this.reportformgroup.value).then((data:any)=>{ 
        this.reportdetails=data; 
        console.log(data) 
      }) 
       
      } 
     
    }
