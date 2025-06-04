import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-districtreg',
  templateUrl: './districtreg.component.html',
  styleUrls: ['./districtreg.component.scss']
})
export class DistrictregComponent 
{
  constructor(private fb: FormBuilder, private router: Router, private dbservice: DbserviceService) { }

  ngOnInit(): void
  {

  }

  districtregform = this.fb.group({ districtname: [''] });

  OnSubmit() 
  {
    console.log(this.districtregform.value);
    this.dbservice.districtreg(this.districtregform.value).then((confirmation: any) => 
    {
      if (confirmation.message == 'success') 
      {
        alert('Registered Successfully');
        this.districtregform.reset();
        this.router.navigate(['/adminmaster/districtreg']).then(() => {
          window.location.reload();
        });
      }
      else 
      {
        alert('Data do not insert, please check');
      }
    });
  }
}
