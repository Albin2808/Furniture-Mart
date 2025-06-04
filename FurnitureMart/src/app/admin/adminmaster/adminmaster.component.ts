import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminmaster',
  templateUrl: './adminmaster.component.html',
  styleUrls: ['./adminmaster.component.scss']
})
export class AdminmasterComponent {
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
