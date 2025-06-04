import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationedit',
  templateUrl: './locationedit.component.html',
  styleUrls: ['./locationedit.component.scss']
})
export class LocationeditComponent {
  locationid: any; // Correct the property name to 'ategoryId'
  public locationArray: any;
  public DistrictdataArray:any;
  locationeditform!: FormGroup;
  constructor(private fb: FormBuilder, private router :Router, private route: ActivatedRoute, private dbservice: DbserviceService) {
  route.paramMap.subscribe((params: ParamMap) => {
  this.locationid = params.get('id')
  })
  // this.route.paramMap.subscribe((params: ParamMap) => {
  // this.CourseId = params.get('id'); // Use 'CourseId' here
  // });
  }
  //page load
  ngOnInit(): void {
  this.locationeditform = this.fb.group({
  districtid: [''],
  locationid: [''], // Use 'CategoryId' here
  locationname: [''],
  })
  const id = this.locationid;
  console.log(id);
  this.dbservice.getlocationdetails({id}).then((data: any) => { 
    this.DistrictdataArray = data;
    console.log(this.locationArray);
    this.locationeditform.setValue({
      districtid:data[0].district_id,
      locationid:data[0].locationid, 
    locationname:data[0].location,
    });
    });
    
  this.dbservice.districtview().then((data:any)=>{
    this.DistrictdataArray=data;
  })}



  OnSubmit()
    {
    this.dbservice.locationedit(this.locationeditform.value)
    .then((confirmation: any) => {
    if (confirmation.message === "Success") 
    {
    alert('Location Details Updated')
    this.router.navigate(['/adminmaster/locationview'])
    }})
    }
    //End of Submit
}
