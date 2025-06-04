import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-profilechange',
  templateUrl: './profilechange.component.html',
  styleUrls: ['./profilechange.component.scss']
})
export class ProfilechangeComponent {
  public profileArray: any;
  public districtdataarray: any;
  public locationdataarray: any;
  profileform!: FormGroup;
  validationstatus = null;
  loginid: any;
  customerdataArray: any;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private db: DbserviceService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.loginid = params.get('id') || localStorage.getItem('loginid');
    });
    
    this.profileform = this.fb.group({
      district_id: [''],
      locationid: [''],
      loginid: [this.loginid],
      name: [''],
      email: [''],
      contact: [''],
    });

    this.loadData();
  }

  async loadData() {
    const id = this.loginid;
    const data = await this.db.getcustomer({ id });
    this.customerdataArray = data;
  
    this.profileform.setValue({
      loginid: data[0].loginid,
      district_id: data[0].district_id,
      locationid: data[0].locationid,
      name: data[0].name,
      email: data[0].email,
      contact: data[0].contact,
    });
  
    const districtData = await this.db.districtview();
    this.districtdataarray = districtData;
  
    const locationData = await this.db.locationview();
    this.locationdataarray = locationData;
  }

  async onchange() {
    const districtId = this.profileform.value.district_id;
    console.log(districtId);
  
    if (districtId) {
      const data = await this.db.getdistrictbyid({ id: districtId });
      this.locationdataarray = data;
      console.log(this.locationdataarray);
    } else {
      this.locationdataarray = []; // Reset location data if no district is selected
    }
  }
  
  onsubmit() {
      this.db.updatecustomer(this.profileform.value)
        .then((confirmation: any) => {
          if (confirmation.message === "Success") {
            alert('Profile Updated')
            this.router.navigate(['/customermaster/profileview'])
          }
        })
    }
}
