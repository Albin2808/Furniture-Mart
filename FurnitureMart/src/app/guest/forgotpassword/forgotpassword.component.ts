import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  forgot: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private db: DbserviceService) {
    this.forgot = this.formBuilder.group({
      email: [''],
      username:[''],
    });
  }
  get email() {
    return this.forgot.get('email');
  }
  get username() {
    return this.forgot.get('username');
  }

  onSubmit() {
    if (this.forgot.valid) {
      const emailValue = this.forgot.value.email;
      
      this.db.forgotpassword(this.forgot.value).then((confirmation: any) => {
        if (confirmation.message === 'Success') {

          const generatedPassword = this.generatePassword();


          this.sendPasswordEmail(emailValue, generatedPassword);

 
          alert('Password reset email sent successfully');

  
          this.router.navigate(['/guestmaster/login']);
        } else {

          console.log('Error:', confirmation.error);
        }
      });
    }
  }

  private generatePassword(): string {
    return 'generatedPassword';
  }

  private sendPasswordEmail(email: string, password: string): void {
    

    console.log('Sending email to:', email);
    console.log('Temporary password:', password);
   
  }
}