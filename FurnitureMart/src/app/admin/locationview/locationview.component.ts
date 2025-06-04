import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationview',
  templateUrl: './locationview.component.html',
  styleUrls: ['./locationview.component.scss']
})
export class LocationviewComponent {
  public DistrictdataArray:any[]=[];
  public LocationdataArray:any[]=[];
  locationview!:FormGroup;
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }
  ngOnInit(): void {
  this.locationview=this.fb.group({
    districtid:[''],
    
  })
  this.db.districtview().then((data:any)=>{
  this.DistrictdataArray=data;
  // console.log(data);
  });
  // this.db.locationview().then((data:any)=>{this. locationdata=data;
  // console.log(data)
  // })
  }
  onChange() {
  const id=this.locationview.value.districtid;
  console.log(id)
  this.db.getdistrictbyid({id}).then((data:any) =>{
  this.LocationdataArray = data;
  console.log(this.LocationdataArray)
  });
  }
  Deletelocationdata(locationid: string) 
{
this.db.Deletelocationdata({ locationid }).then((confirmation: any) => {
if (confirmation.message === "Success") {
alert('Sucessfully Deleted')
window.location.reload();
this.db.locationview();
}
})
}
  }
  

