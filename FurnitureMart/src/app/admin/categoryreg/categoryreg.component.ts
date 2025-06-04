import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryreg',
  templateUrl: './categoryreg.component.html',
  styleUrls: ['./categoryreg.component.scss']
})
export class CategoryregComponent {

  // public categorydata:any[]=[];
  selectedFiles?: FileList;

  currentFile?: any;
  message = '';
  fileInfos?: Observable<any>;
  constructor(private fb: FormBuilder, private dbservice: DbserviceService, private router: Router) { }
  categoryregformgroup = this.fb.group({
    categoryname: [''],
    description: [''],
    image: [''],
  })

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  onSubmit() {
    if (this.selectedFiles) {
      // console.log(this.selectedFiles);
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
        this.currentFile = file;

        this.dbservice.upload(this.currentFile).subscribe(
          (event: any) => {
            this.message = event.body.message;
          });

        this.categoryregformgroup.value.image = this.currentFile.name;

        // console.log(this.productimage);
        this.dbservice.categoryreg(this.categoryregformgroup.value).then((confirmation: any) => 
        {
          console.log(confirmation)
          if (confirmation.message === "Success") {
            alert('Category Registration Successfully')
            this.router.navigate(['/adminmaster/categoryview'])
          }
          else{
            alert("Data not inserted")
          }
        })
        console.log(this.categoryregformgroup.value)
      }
    }
  }
}