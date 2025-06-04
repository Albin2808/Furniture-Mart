import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customerreg',
  templateUrl: './customerreg.component.html',
  styleUrls: ['./customerreg.component.scss']
})
export class CustomerregComponent {
  public DistrictDataArray:any[]=[];
  public LocationDataArray:any[]=[];
  validationstatus=null;
  inputText: any;
  // customerregformgroup!:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private db:DbserviceService) { }

  customerregformgroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[A-Z][a-zA-z\s\w]*$/)]],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.pattern('[0-9]*'), Validators.minLength(10)]],
    district_id: [''],
    locationid: [''],
    username: ['', [Validators.required, Validators.pattern('^(?=.*[0-9])[a-zA-Z0-9]*$')]],
    password: ['',[Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$'),Validators.minLength(8)]],
  });
  ngOnInit(): void { 
    this.fetchDistrictData();
    this.fetchLocationData();
  }

  fetchDistrictData(): void {
    this.db.districtview().then((data: any) => {
      this.DistrictDataArray = data;
    }).catch(error => {
      console.error('Error fetching district data:', error);
    });
  }

  fetchLocationData(): void {
    this.db.locationview().then((data: any) => {
      this.LocationDataArray = data;
    }).catch(error => {
      console.error('Error fetching location data:', error);
    });
  }

  onChange(): void {
    const districtId = this.customerregformgroup.value.district_id;
    if (districtId) {
      this.db.getdistrictbyid({ id: districtId }).then((data: any) => {
        this.LocationDataArray = data;
      }).catch(error => {
        console.error('Error fetching location data for district:', error);
      });
    }
  }

  onsubmit(): void {
    if (this.customerregformgroup.invalid) {
      this.validationstatus = "";
      alert('Please enter valid data');
      return;
    }

    this.validationstatus = null;
    console.log(this.customerregformgroup.value);

    this.db.customerreg(this.customerregformgroup.value).then((confirmation: any) => { 
      if (confirmation.message == "Success") { 
        alert('Registered Successfully'); 
        this.router.navigate(['/guestmaster/login']);
      } else { 
        alert('Failed to register, please check your data');
      }
    }).catch(error => {
      console.error('Error registering customer:', error);
    });
  }
}