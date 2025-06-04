import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationreg',
  templateUrl: './locationreg.component.html',
  styleUrls: ['./locationreg.component.scss']
})
export class LocationregComponent {
  public DistrictdataArray:any[]=[];
  constructor(private fb:FormBuilder,private router:Router,private db:DbserviceService) { }

  locationregformgroup=this.fb.group({
    districtid:[''], 
    locationname:['']

})
// ngOnInit(): void { 
// this.db.districtview().then((data:any)=>{
// this.DistrictdataArray=data;
// })

ngOnInit(): void {
  this.db.districtview().then((data: any) => {
    // Sort the DistrictdataArray alphabetically based on district_name
    this.DistrictdataArray = data.sort((a, b) => a.district_name.localeCompare(b.district_name));
  
})
}



OnSubmit()
{
  console.log(this.locationregformgroup.value)
  this.db.locationreg(this.locationregformgroup.value).then((confirmation:any)=>{ 
    if(confirmation.message == "Success")
    { 
      alert('Registered Successfully') 
      this.router.navigate(['/adminmaster/locationview'])
   } 
   else 
   { 
    alert('Data do not insert,please check')
}

}


)}
}
