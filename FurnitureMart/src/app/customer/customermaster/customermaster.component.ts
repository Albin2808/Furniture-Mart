import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-customermaster',
  templateUrl: './customermaster.component.html',
  styleUrls: ['./customermaster.component.scss']
})
export class CustomermasterComponent {
  loginid: any;

  constructor(private router: Router, private dbService: DbserviceService) {}
Logout()
{
    localStorage.removeItem('loginid');
    alert('logout successfully ');
    // this.router.navigate(['guestmaster/login']);
    const navigationExtras: NavigationExtras = {
      replaceUrl: true,
    };
    window.history.go(-(window.history.length - 1));
    this.router.navigate(['guestmaster/login'], navigationExtras);
  }
}