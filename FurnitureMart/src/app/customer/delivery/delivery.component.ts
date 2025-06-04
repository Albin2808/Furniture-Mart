import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent {
  public DistrictDataArray: any[] = [];
  public LocationDataArray: any[] = [];
  masterid: any;
  validationstatus:any;
  

  constructor(private fb: FormBuilder, private router: Router, private db: DbserviceService,private route: ActivatedRoute) {}
  deliveryform = this.fb.group({
    district_id: ['', Validators.required],
    locationid: ['', Validators.required],
    name: ['', Validators.required],
    housename: ['', Validators.required],
    pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    contact: ['', [Validators.pattern('[0-9]*'), Validators.minLength(10)]],
    place: ['', Validators.required],
    landmark: ['']

  });
  ngOnInit(): void {

    localStorage.setItem("masterid",this.masterid);
    console.log(this.masterid)
    
    this.db.districtview().then((data: any) => {
      this.DistrictDataArray = data;
    });

    this.db.locationview().then((data: any) => {
      this.LocationDataArray = data;
    });
  }

  onChange() {
    const id = this.deliveryform.value.district_id;
    console.log(id);
    this.db.getdistrictbyid({ id }).then((data: any) => {
      this.LocationDataArray = data;
      console.log(this.LocationDataArray);
    });
  };  
  OnSubmit() {
    console.log(this.deliveryform.value);
    this.db.delivery(this.deliveryform.value).then((confirmation: any) => {
      if (confirmation.message == "success") {
        alert('Request details Inserted');
        this.router.navigate(["/customermaster/payment"]);
      } else {
        alert('Data not inserted, please check your data');
      }
    });
}
}