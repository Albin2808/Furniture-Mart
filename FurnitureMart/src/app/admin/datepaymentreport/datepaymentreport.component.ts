import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-datepaymentreport',
  templateUrl: './datepaymentreport.component.html',
  styleUrls: ['./datepaymentreport.component.scss']
})
export class DatepaymentreportComponent {
  paymentreportdetails: any;
  constructor(private fb:FormBuilder,private router:Router,private db:DbserviceService){} 
       
     
      ngOnInit(): void { 
        
      } 
       
      reportformgroup=this.fb.group({ 
        startdate:[''], 
        enddate:[''] 
      }) 
     
 
  
      OnSubmit(){ 
      this.db.reportpayment(this.reportformgroup.value).then((data:any)=>{ 
        this.paymentreportdetails=data; 
        console.log(data) 
      }) 
       
      } 
     
    }